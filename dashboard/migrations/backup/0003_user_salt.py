# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-16 21:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_auto_20170611_0034'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='salt',
            field=models.CharField(default=123, max_length=100),
            preserve_default=False,
        ),
    ]
