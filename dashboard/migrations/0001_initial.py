# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-22 03:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meal_type', models.CharField(max_length=20)),
                ('date_created', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('date_created', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('date_created', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first', models.CharField(max_length=20)),
                ('last', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100, unique=True)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('salt', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('date_created', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.AddField(
            model_name='profile',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.User'),
        ),
        migrations.AddField(
            model_name='meal',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.Profile'),
        ),
        migrations.AddField(
            model_name='meal',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.Recipe'),
        ),
    ]
