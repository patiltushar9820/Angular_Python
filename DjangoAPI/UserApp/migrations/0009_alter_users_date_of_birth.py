# Generated by Django 3.2.8 on 2021-10-20 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0008_auto_20211020_1130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='Date_Of_Birth',
            field=models.DateTimeField(default=None),
        ),
    ]
