# Generated by Django 3.2.8 on 2021-10-20 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0006_users_addr_line_1'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='Note',
            field=models.TextField(default=None, max_length=10000),
        ),
        migrations.AlterField(
            model_name='users',
            name='Addr_line_1',
            field=models.TextField(default=None, max_length=1000),
        ),
    ]
