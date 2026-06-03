# Generated manually for EchoHorn platform updates.

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consumer', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='cargo_care_rating',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5),
        ),
        migrations.AddField(
            model_name='rating',
            name='punctuality_rating',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5),
        ),
        migrations.AddField(
            model_name='rating',
            name='safety_rating',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5),
        ),
    ]
