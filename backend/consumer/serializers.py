from rest_framework import serializers
from .models import ServiceRequest, Booking, Complaint, Rating
from contractor.serializers import DriverSerializer, VehicleSerializer
from core.services import find_pool_matches, looks_like_real_address


class ServiceRequestSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.get_full_name', read_only=True)
    pool_matches = serializers.SerializerMethodField()
    
    class Meta:
        model = ServiceRequest
        fields = [
            'id', 'customer', 'customer_name', 'service_type',
            'pickup_address', 'pickup_floor_number', 'pickup_lift_available', 'pickup_parking_available',
            'drop_address', 'drop_floor_number', 'drop_lift_available', 'drop_parking_available',
            'cargo_type', 'cargo_weight', 'room_count', 'packing_needed',
            'vehicle_type_preference', 'pickup_datetime', 'special_notes',
            'ml_suggested_vehicle_type', 'ml_suggested_price',
            'status', 'pool_matches', 'created_at', 'updated_at'
        ]
        read_only_fields = ['customer', 'ml_suggested_vehicle_type', 'ml_suggested_price',
                           'status', 'created_at', 'updated_at']

    def validate_pickup_address(self, value):
        if not looks_like_real_address(value):
            raise serializers.ValidationError("Enter a valid pickup address with enough detail.")
        return value

    def validate_drop_address(self, value):
        if not looks_like_real_address(value):
            raise serializers.ValidationError("Enter a valid drop address with enough detail.")
        return value

    def get_pool_matches(self, obj):
        return find_pool_matches(obj)


class BookingSerializer(serializers.ModelSerializer):
    service_request_details = ServiceRequestSerializer(source='service_request', read_only=True)
    driver_details = DriverSerializer(source='driver', read_only=True)
    vehicle_details = VehicleSerializer(source='vehicle', read_only=True)
    contractor_name = serializers.CharField(source='contractor.get_full_name', read_only=True)
    estimated_driver_income = serializers.SerializerMethodField()
    
    class Meta:
        model = Booking
        fields = [
            'id', 'service_request', 'service_request_details', 'driver', 'driver_details',
            'contractor', 'contractor_name', 'vehicle', 'vehicle_details',
            'final_price', 'advance_percentage', 'advance_paid', 'advance_amount', 'estimated_driver_income',
            'full_payment_paid', 'payment_date', 'status',
            'booking_confirmed_at', 'trip_started_at', 'trip_completed_at',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['advance_amount', 'booking_confirmed_at', 'trip_started_at',
                           'trip_completed_at', 'created_at', 'updated_at']

    def get_estimated_driver_income(self, obj):
        profile = getattr(obj.driver.user, 'driver_profile', None)
        return str(profile.fixed_income_per_trip) if profile else "0.00"


class BookingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['service_request', 'driver', 'contractor', 'vehicle', 'final_price']
        extra_kwargs = {
            'contractor': {'required': False},
            'final_price': {'required': False},
        }
    
    def validate(self, attrs):
        # Check if driver is available
        driver = attrs.get('driver')
        if driver.status != 'available':
            raise serializers.ValidationError("Selected driver is not available")
        
        # Check if vehicle is available
        vehicle = attrs.get('vehicle')
        if vehicle.status != 'available':
            raise serializers.ValidationError("Selected vehicle is not available")
        
        # Check if service request is still pending
        service_request = attrs.get('service_request')
        if service_request.status != 'pending':
            raise serializers.ValidationError("This service request is no longer available")

        request = self.context.get('request')
        if request and service_request.customer != request.user:
            raise serializers.ValidationError("You can only book your own service request.")

        contractor = attrs.get('contractor') or driver.contractor

        if vehicle.contractor != contractor:
            raise serializers.ValidationError("Vehicle must belong to the selected contractor.")

        if driver.contractor != contractor:
            raise serializers.ValidationError("Driver must belong to the selected contractor.")
        
        return attrs

    def create(self, validated_data):
        validated_data['contractor'] = validated_data.get('contractor') or validated_data['driver'].contractor
        if not validated_data.get('final_price'):
            validated_data['final_price'] = validated_data['service_request'].ml_suggested_price or 0
        booking = super().create(validated_data)
        profile = getattr(booking.driver.user, 'driver_profile', None)
        if profile and profile.fixed_income_per_trip <= 0:
            profile.fixed_income_per_trip = (booking.final_price * 40) / 100
            profile.save(update_fields=['fixed_income_per_trip', 'updated_at'])
        return booking


class RatingSerializer(serializers.ModelSerializer):
    rated_by_name = serializers.CharField(source='rated_by.get_full_name', read_only=True)
    rated_user_name = serializers.CharField(source='rated_user.get_full_name', read_only=True)
    
    class Meta:
        model = Rating
        fields = [
            'id', 'booking', 'rated_by', 'rated_by_name',
            'rated_user', 'rated_user_name', 'rating', 'punctuality_rating',
            'safety_rating', 'cargo_care_rating', 'review', 'created_at'
        ]
        read_only_fields = ['rated_by', 'created_at']


class ComplaintSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.get_full_name', read_only=True)
    booking_reference = serializers.IntegerField(source='booking.id', read_only=True)

    class Meta:
        model = Complaint
        fields = [
            'id',
            'customer',
            'customer_name',
            'booking',
            'booking_reference',
            'title',
            'detail',
            'status',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['customer', 'status', 'created_at', 'updated_at']

    def validate_title(self, value):
        cleaned = str(value).strip()
        if len(cleaned) < 5:
            raise serializers.ValidationError("Complaint title must be more descriptive.")
        return cleaned

    def validate_detail(self, value):
        cleaned = str(value).strip()
        if len(cleaned) < 12:
            raise serializers.ValidationError("Complaint detail must explain the issue clearly.")
        return cleaned
