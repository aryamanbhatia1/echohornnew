# Generated manually for EchoHorn platform updates.

import django.core.validators
import django.db.models.deletion
import phonenumber_field.modelfields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(
                choices=[('consumer', 'Consumer'), ('driver', 'Driver'), ('contractor', 'Contractor')],
                max_length=20,
            ),
        ),
        migrations.CreateModel(
            name='DriverProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('driver_type', models.CharField(choices=[('independent', 'Independent'), ('fleet_driver', 'Fleet Driver')], default='independent', max_length=20)),
                ('aadhaar_number', models.CharField(max_length=12, unique=True, validators=[django.core.validators.RegexValidator('^\\d{12}$', 'Aadhaar number must be exactly 12 digits.')])),
                ('date_of_birth', models.DateField()),
                ('license_number', models.CharField(max_length=30, unique=True)),
                ('license_expiry_date', models.DateField()),
                ('years_of_experience', models.PositiveIntegerField(default=0, validators=[django.core.validators.MaxValueValidator(60)])),
                ('home_region', models.CharField(max_length=120)),
                ('currently_available', models.BooleanField(default=True)),
                ('preferred_route_types', models.CharField(choices=[('local', 'Local'), ('intercity', 'Intercity'), ('both', 'Both')], default='both', max_length=20)),
                ('emergency_contact_name', models.CharField(max_length=120)),
                ('emergency_contact_phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('safety_training_completed', models.BooleanField(default=False)),
                ('fixed_income_per_trip', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('driver_points', models.PositiveIntegerField(default=0)),
                ('safety_score', models.DecimalField(decimal_places=2, default=4.5, max_digits=4, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('predicted_rating', models.DecimalField(decimal_places=2, default=4.0, max_digits=4, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('total_distance_km', models.PositiveIntegerField(default=0)),
                ('total_completed_deliveries', models.PositiveIntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='driver_profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['-created_at']},
        ),
    ]
