from datetime import date
from decimal import Decimal

from django.core.management.base import BaseCommand
from django.utils import timezone

from accounts.models import ConsumerProfile, ContractorProfile, DriverProfile, User
from consumer.models import Booking, Rating, ServiceRequest
from contractor.models import Driver, DriverVehicleAssignment, Vehicle
from core.services import estimate_service_request_quote, refresh_contractor_metrics, refresh_driver_metrics


class Command(BaseCommand):
    help = "Seed realistic demo data for the EchoHorn logistics platform."

    def handle(self, *args, **options):
        contractor, _ = User.objects.get_or_create(
            email='owner@aqlogistics.demo',
            defaults={
                'first_name': 'Aq',
                'last_name': 'Logistics',
                'user_type': 'contractor',
                'phone_number': '+919811111111',
            },
        )
        contractor.set_password('OwnerDemo123!')
        contractor.save()
        ContractorProfile.objects.get_or_create(
            user=contractor,
            defaults={
                'contractor_type': 'company',
                'company_name': 'AQ Logistics',
                'company_registration_number': 'AQ-2026-LOG-119',
                'gst_number': '29ABCDE1234F1Z5',
                'business_address': '14 Sector 9 Transport Hub, Gurugram 122001',
                'city': 'Gurugram',
                'state': 'Haryana',
                'pincode': '122001',
                'is_verified': True,
                'verified_at': timezone.now(),
            },
        )

        consumer, _ = User.objects.get_or_create(
            email='customer@aqlogistics.demo',
            defaults={
                'first_name': 'Riya',
                'last_name': 'Sharma',
                'user_type': 'consumer',
                'phone_number': '+919822222222',
            },
        )
        consumer.set_password('CustomerDemo123!')
        consumer.save()
        ConsumerProfile.objects.get_or_create(
            user=consumer,
            defaults={
                'company_name': 'Riya Retail Supplies',
                'is_business': True,
                'gst_number': '07ABCDE1234F1Z9',
                'business_address': '221 Market Road, Noida 201301',
            },
        )

        driver_specs = [
            ('driver1@aqlogistics.demo', 'Arjun', 'Malik', '+919833333331', 'DL-AX-1010', 'Gurugram', 'mini_truck', Decimal('5200.00')),
            ('driver2@aqlogistics.demo', 'Neeraj', 'Kumar', '+919833333332', 'DL-AX-1020', 'Delhi NCR', 'medium_truck', Decimal('6800.00')),
            ('driver3@aqlogistics.demo', 'Vikas', 'Rao', '+919833333333', 'DL-AX-1030', 'Noida', 'full_truck', Decimal('8400.00')),
        ]

        for index, (email, first_name, last_name, phone, license_number, region, vehicle_type, fixed_income) in enumerate(driver_specs, start=1):
            driver_user, _ = User.objects.get_or_create(
                email=email,
                defaults={
                    'first_name': first_name,
                    'last_name': last_name,
                    'user_type': 'driver',
                    'phone_number': phone,
                },
            )
            driver_user.set_password('DriverDemo123!')
            driver_user.save()

            DriverProfile.objects.get_or_create(
                user=driver_user,
                defaults={
                    'driver_type': 'fleet_driver',
                    'aadhaar_number': f'3456789012{index:02d}',
                    'date_of_birth': date(1990 + index, 1, 12),
                    'license_number': license_number,
                    'license_expiry_date': timezone.now().date() + timezone.timedelta(days=1000),
                    'years_of_experience': 4 + index,
                    'home_region': region,
                    'currently_available': True,
                    'preferred_route_types': 'both',
                    'emergency_contact_name': f'{first_name} Contact',
                    'emergency_contact_phone': f'+91984444444{index}',
                    'safety_training_completed': True,
                    'fixed_income_per_trip': fixed_income,
                    'driver_points': 50 * index,
                    'total_distance_km': 12000 * index,
                    'total_completed_deliveries': 20 * index,
                },
            )

            driver, _ = Driver.objects.get_or_create(
                user=driver_user,
                defaults={'contractor': contractor, 'status': 'available'},
            )

            vehicle, _ = Vehicle.objects.get_or_create(
                registration_number=f'HR55AQ10{index}',
                defaults={
                    'contractor': contractor,
                    'vehicle_type': vehicle_type,
                    'capacity_weight': Decimal(str(1.5 * index + 1)),
                    'model_make': f'Tata {vehicle_type.replace("_", " ").title()}',
                    'fuel_type': 'diesel',
                    'current_location': region,
                    'insurance_policy_number': f'INS-AQ-{index}',
                    'insurance_expiry_date': timezone.now().date() + timezone.timedelta(days=240),
                    'puc_number': f'PUC-AQ-{index}',
                    'puc_expiry_date': timezone.now().date() + timezone.timedelta(days=180),
                    'status': 'available',
                    'odometer_reading': 40000 * index,
                },
            )

            DriverVehicleAssignment.objects.get_or_create(driver=driver, vehicle=vehicle, is_active=True)

        requests = [
            {
                'service_type': 'intercity',
                'pickup_address': '12 Electronics Market, Sector 18, Noida 201301',
                'drop_address': '51 Ring Road Warehouse, Jaipur 302003',
                'cargo_type': 'electronics',
                'cargo_weight': Decimal('1800.00'),
                'vehicle_type_preference': 'medium_truck',
                'pickup_datetime': timezone.now() + timezone.timedelta(days=1),
                'packing_needed': True,
            },
            {
                'service_type': 'local',
                'pickup_address': '42 Furniture Lane, Dwarka Sector 7, New Delhi 110075',
                'drop_address': '87 Golf Course Extension Road, Gurugram 122018',
                'cargo_type': 'furniture',
                'cargo_weight': Decimal('900.00'),
                'vehicle_type_preference': 'mini_truck',
                'pickup_datetime': timezone.now() + timezone.timedelta(days=2),
                'packing_needed': False,
            },
        ]

        for payload in requests:
            service_request, _ = ServiceRequest.objects.get_or_create(
                customer=consumer,
                pickup_address=payload['pickup_address'],
                drop_address=payload['drop_address'],
                defaults={
                    **payload,
                    'pickup_parking_available': True,
                    'drop_parking_available': True,
                    'pickup_lift_available': True,
                    'drop_lift_available': True,
                    'special_notes': 'Seeded demo request',
                },
            )
            if not service_request.ml_suggested_price:
                vehicle_type, price = estimate_service_request_quote(service_request)
                service_request.ml_suggested_vehicle_type = vehicle_type
                service_request.ml_suggested_price = price
                service_request.save(update_fields=['ml_suggested_vehicle_type', 'ml_suggested_price', 'updated_at'])

        booking_request = ServiceRequest.objects.filter(customer=consumer).first()
        if booking_request:
            assigned_driver = Driver.objects.filter(contractor=contractor).first()
            assigned_vehicle = Vehicle.objects.filter(contractor=contractor).first()
            booking, _ = Booking.objects.get_or_create(
                service_request=booking_request,
                defaults={
                    'driver': assigned_driver,
                    'contractor': contractor,
                    'vehicle': assigned_vehicle,
                    'final_price': booking_request.ml_suggested_price or Decimal('7200.00'),
                    'advance_paid': True,
                    'full_payment_paid': True,
                    'payment_date': timezone.now(),
                    'status': 'completed',
                    'booking_confirmed_at': timezone.now() - timezone.timedelta(hours=14),
                    'trip_started_at': timezone.now() - timezone.timedelta(hours=8),
                    'trip_completed_at': timezone.now() - timezone.timedelta(hours=2),
                },
            )
            booking_request.status = 'completed'
            booking_request.save(update_fields=['status', 'updated_at'])

            Rating.objects.get_or_create(
                booking=booking,
                rated_by=consumer,
                rated_user=assigned_driver.user,
                defaults={
                    'rating': 5,
                    'punctuality_rating': 5,
                    'safety_rating': 5,
                    'cargo_care_rating': 4,
                    'review': 'Delivered safely and on time with clear communication.',
                },
            )
            refresh_driver_metrics(assigned_driver)
            refresh_contractor_metrics(contractor)

        self.stdout.write(self.style.SUCCESS('Demo data seeded successfully.'))
