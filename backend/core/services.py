from __future__ import annotations

from dataclasses import dataclass
from decimal import Decimal
from typing import Iterable

from django.db.models import Avg, Count, Q
from django.utils import timezone

from accounts.models import DriverProfile
from consumer.models import Booking, Complaint, Rating, ServiceRequest
from contractor.models import Driver, Vehicle


ADDRESS_BLOCKLIST = {'fake', 'dummy', 'asdf', 'test', 'unknown', 'na', 'n/a', 'nil'}


def looks_like_real_address(value: str) -> bool:
    if not value:
        return False
    normalized = " ".join(value.strip().split()).lower()
    if len(normalized) < 10:
        return False
    return normalized not in ADDRESS_BLOCKLIST and any(char.isdigit() for char in normalized)


def infer_distance_km(service_request: ServiceRequest) -> int:
    address_size_signal = abs(len(service_request.pickup_address) - len(service_request.drop_address))
    vehicle_factor = {
        'tempo': 8,
        'mini_truck': 16,
        'medium_truck': 28,
        'full_truck': 45,
        'trailer': 70,
    }.get(service_request.vehicle_type_preference, 18)
    service_factor = 120 if service_request.service_type == 'intercity' else 22
    parking_penalty = 6 if not service_request.pickup_parking_available or not service_request.drop_parking_available else 0
    return max(8, service_factor + vehicle_factor + address_size_signal + parking_penalty)


def estimate_service_request_quote(service_request: ServiceRequest) -> tuple[str, Decimal]:
    distance_km = infer_distance_km(service_request)
    weight = float(service_request.cargo_weight)

    suggested_vehicle = service_request.vehicle_type_preference
    if weight > 8500:
        suggested_vehicle = 'trailer'
    elif weight > 5000:
        suggested_vehicle = 'full_truck'
    elif weight > 2500:
        suggested_vehicle = 'medium_truck'
    elif weight < 700 and service_request.service_type == 'single_item':
        suggested_vehicle = 'tempo'

    base = Decimal('950.00')
    distance_cost = Decimal(str(distance_km * 18))
    weight_cost = Decimal(str(round(weight * 0.85, 2)))
    packing_cost = Decimal('650.00') if service_request.packing_needed else Decimal('0.00')
    handling_cost = Decimal('350.00') if (service_request.pickup_floor_number or 0) > 2 or (service_request.drop_floor_number or 0) > 2 else Decimal('0.00')

    price = (base + distance_cost + weight_cost + packing_cost + handling_cost).quantize(Decimal('0.01'))
    return suggested_vehicle, price


def calculate_driver_prediction(profile: DriverProfile) -> Decimal:
    experience_component = min(profile.years_of_experience * 0.08, 0.9)
    delivery_component = min(profile.total_completed_deliveries * 0.015, 0.7)
    distance_component = min(profile.total_distance_km / 50000, 0.5)
    training_component = 0.2 if profile.safety_training_completed else 0
    points_component = min(profile.driver_points / 300, 0.5)
    score = 2.8 + experience_component + delivery_component + distance_component + training_component + points_component
    return Decimal(str(round(min(score, 5.0), 2)))


def refresh_driver_metrics(driver: Driver) -> None:
    profile = getattr(driver.user, 'driver_profile', None)
    ratings = Rating.objects.filter(rated_user=driver.user)
    average_rating = ratings.aggregate(avg=Avg('rating'))['avg'] or 0
    total_ratings = ratings.count()
    total_bookings = Booking.objects.filter(driver=driver, status='completed').count()

    driver.total_trips_completed = total_bookings
    driver.average_rating = Decimal(str(round(float(average_rating or 0), 2)))
    driver.efficiency_score = Decimal(str(round(min(5.0, 3.0 + (total_bookings * 0.05) + (float(average_rating or 0) * 0.25)), 2)))
    driver.save(update_fields=['total_trips_completed', 'average_rating', 'efficiency_score', 'updated_at'])

    if profile:
        profile.total_completed_deliveries = total_bookings
        profile.driver_points = total_bookings * 10 + total_ratings * 2
        profile.predicted_rating = calculate_driver_prediction(profile)
        profile.save(update_fields=['total_completed_deliveries', 'driver_points', 'predicted_rating', 'updated_at'])


def refresh_contractor_metrics(contractor_user) -> None:
    profile = getattr(contractor_user, 'contractor_profile', None)
    if not profile:
        return
    vehicle_count = Vehicle.objects.filter(contractor=contractor_user).count()
    driver_count = Driver.objects.filter(contractor=contractor_user).count()
    rating_avg = Driver.objects.filter(contractor=contractor_user).aggregate(avg=Avg('average_rating'))['avg'] or 0
    profile.total_vehicles = vehicle_count
    profile.total_drivers = driver_count
    profile.average_rating = Decimal(str(round(float(rating_avg or 0), 2)))
    profile.save(update_fields=['total_vehicles', 'total_drivers', 'average_rating', 'updated_at'])


def find_pool_matches(service_request: ServiceRequest) -> list[dict]:
    window_start = service_request.pickup_datetime - timezone.timedelta(hours=3)
    window_end = service_request.pickup_datetime + timezone.timedelta(hours=3)
    candidates = ServiceRequest.objects.filter(
        status='pending',
        vehicle_type_preference=service_request.vehicle_type_preference,
        pickup_datetime__range=(window_start, window_end),
    ).exclude(id=service_request.id)[:5]

    matches = []
    for candidate in candidates:
        pickup_overlap = service_request.pickup_address[:18].lower() == candidate.pickup_address[:18].lower()
        drop_overlap = service_request.drop_address[:18].lower() == candidate.drop_address[:18].lower()
        if pickup_overlap or drop_overlap:
            combined_weight = float(service_request.cargo_weight) + float(candidate.cargo_weight)
            matches.append({
                'service_request_id': candidate.id,
                'pickup_address': candidate.pickup_address,
                'drop_address': candidate.drop_address,
                'combined_weight_kg': round(combined_weight, 2),
                'fuel_savings_percent': 14 if combined_weight < 4000 else 9,
                'pool_ready': True,
            })
    return matches


def get_admin_dashboard_snapshot() -> dict:
    now = timezone.now()
    week_ago = now - timezone.timedelta(days=7)
    requests = ServiceRequest.objects.all()
    bookings = Booking.objects.all()
    drivers = Driver.objects.all()
    complaints = Complaint.objects.select_related('customer', 'booking').all()
    vehicles = Vehicle.objects.all()

    region_demand = (
        requests.values('vehicle_type_preference')
        .annotate(total=Count('id'))
        .order_by('-total')[:5]
    )
    shortage_regions = []
    for row in region_demand:
        desired = row['total']
        available = drivers.filter(
            status='available',
            vehicle_assignments__vehicle__vehicle_type=row['vehicle_type_preference'],
            vehicle_assignments__is_active=True,
        ).distinct().count()
        shortage_regions.append({
            'vehicle_type': row['vehicle_type_preference'],
            'open_requests': desired,
            'available_drivers': available,
            'gap': max(desired - available, 0),
        })

    truck_categories = (
        vehicles.values('vehicle_type')
        .annotate(
            total=Count('id'),
            available=Count('id', filter=Q(status='available')),
            in_use=Count('id', filter=Q(status='in_use')),
            maintenance=Count('id', filter=Q(status='maintenance')),
        )
        .order_by('vehicle_type')
    )

    return {
        'totals': {
            'users': requests.values('customer').distinct().count(),
            'service_requests': requests.count(),
            'pending_approvals': bookings.filter(status='awaiting_acceptance').count(),
            'active_bookings': bookings.filter(status__in=['accepted', 'in_progress']).count(),
            'completed_bookings': bookings.filter(status='completed').count(),
            'available_drivers': drivers.filter(status='available').count(),
            'vehicles_on_board': vehicles.count(),
            'open_complaints': complaints.filter(status__in=['open', 'in_review']).count(),
        },
        'recent_activity': {
            'requests_last_7_days': requests.filter(created_at__gte=week_ago).count(),
            'bookings_last_7_days': bookings.filter(created_at__gte=week_ago).count(),
            'avg_rating': float(Rating.objects.aggregate(avg=Avg('rating'))['avg'] or 0),
        },
        'shortage_regions': shortage_regions,
        'truck_categories': list(truck_categories),
        'booking_requests': list(
            bookings.values(
                'id',
                'status',
                'final_price',
                'service_request__pickup_address',
                'service_request__drop_address',
                'service_request__vehicle_type_preference',
                'service_request__pickup_datetime',
                'service_request__customer__first_name',
                'service_request__customer__last_name',
                'contractor__first_name',
                'contractor__last_name',
            ).order_by('-created_at')[:8]
        ),
        'complaints': list(
            complaints.values(
                'id',
                'title',
                'detail',
                'status',
                'created_at',
                'customer__first_name',
                'customer__last_name',
                'booking_id',
            )[:8]
        ),
        'safety_watchlist': list(
            DriverProfile.objects.filter(Q(safety_score__lt=3.5) | Q(predicted_rating__lt=3.5))
            .values('user__first_name', 'user__last_name', 'home_region', 'safety_score', 'predicted_rating')[:5]
        ),
    }
