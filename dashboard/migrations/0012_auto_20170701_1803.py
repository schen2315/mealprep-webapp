# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-01 18:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0011_auto_20170701_1800'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meal',
            name='time',
        ),
        migrations.AlterField(
            model_name='meal',
            name='meal_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.Meal_type'),
        ),
    ]
