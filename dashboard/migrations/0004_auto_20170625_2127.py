# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-25 21:27
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_schedule_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='biweekly',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='daily',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='monthly',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='once',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='weekly',
        ),
    ]