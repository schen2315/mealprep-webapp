from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password, make_password, is_password_usable
import random
from django.utils import timezone

class User(models.Model):
    # primary key will automatically be added
    first = models.CharField(max_length = 20, blank=False)
    last = models.CharField(max_length = 20, blank=False)
    email = models.CharField(max_length = 100, blank=False, unique=True)
    username = models.CharField(max_length = 20, blank=False, unique=True)
    salt = models.CharField(max_length = 100, blank=False)
    password = models.CharField(max_length = 100, blank=False)
    date_created = models.DateTimeField('date published', blank=False)
    @staticmethod
    def gen_salt():
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        chars=[]
        for i in range(32):
            chars.append(random.choice(ALPHABET))
        salt = "".join(chars)
        return salt
    @classmethod
    def create(cls,first, last, email, username, password):
        random = User.gen_salt()
        user = cls(
            first=first,
            last=last,
            email=email,
            username=username,
            salt=random,
            password=make_password(password, salt=random),
            date_created = timezone.now())
        return user
    def check_password(self, password):
        if(check_password(password, self.password)):
            return True
        return False
    def __str__(self):
        return self.username
class Profile(models.Model):
    name = models.CharField(max_length = 20, blank=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)
    date_created = models.DateTimeField('date published', blank=False)
    @classmethod
    def create(cls, name, user):
        profile = cls(name=name, user=user, date_created=timezone.now())
        return profile
    def __str__(self):
        return User.objects.get(id=self.user_id).username + ": " + self.name
class Recipe(models.Model):
    name = models.CharField(max_length = 20, blank=False)
    description = models.CharField(max_length = 300, blank=True)
    date_created = models.DateTimeField('date published', blank=False)
    @classmethod
    def create(cls, name, description):
        recipe = cls(name=name, description=description, date_created=timezone.now())
        return recipe
    def __str__(self):
        return self.name
class Meal(models.Model):
    meal_type = models.ForeignKey('Meal_type', on_delete=models.CASCADE)
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE, blank=False)
    recipe = models.ForeignKey('Recipe', on_delete=models.CASCADE, blank=False)
    date_created = models.DateTimeField('date published', blank=False)
    @classmethod
    def create(cls, meal_type, profile, recipe):
        meal = cls(meal_type=meal_type, profile=profile, recipe=recipe, date_created=timezone.now())
        return meal
    def __str__(self):
        return self.meal_type.__str__() + ": " + self.recipe.name
class Meal_type(models.Model):
    label = models.CharField(max_length = 20, blank=False)
    time = models.CharField(max_length=100, blank=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)
    date_created = models.DateTimeField('date published', blank=False)
    @classmethod
    def create(cls, label, time, user):
        meal_type = cls(label=label, time=time.str(), user=user, date_created=timezone.now())
        return meal_type
    def __str__(self):
        return self.label
class Schedule(models.Model):
    mon = models.BooleanField(default=False)
    tue = models.BooleanField(default=False)
    wed = models.BooleanField(default=False)
    thu = models.BooleanField(default=False)
    fri = models.BooleanField(default=False)
    sat = models.BooleanField(default=False)
    sun = models.BooleanField(default=False)
    meal = models.ForeignKey('Meal', on_delete=models.CASCADE, blank=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE, blank=False)
    label = models.CharField(max_length = 20, blank=False)
    date_created = models.DateTimeField('date published', blank=False)
    @classmethod
    def create(cls, meal, user):
        schedule = cls(meal=meal, user=user, date_created=timezone.now())
        return schedule
    def __str__(self):
        m = "m" if self.mon else "" 
        t = "t" if self.tue else "" 
        w = "w" if self.wed else "" 
        th = "th" if self.thu else "" 
        fr = "fr" if self.fri else "" 
        s = "s" if self.sat else "" 
        su = "su" if self.sun else ""
        return ' '.join([m,t,w,th,fr,s,su])
# use military time
class Time():
    timezone = ''
    hour = ''
    minute = ''
    def __init__(self, hour, minute):
        if(minute < 0 or minute > 60):
            minute = 0
        if(hour < 0 or hour > 23):
            hour = 0
        if(minute < 10):
            minute = '0' + str(minute)
        else:
            minute = str(minute)
        hour = str(hour)
        #time = cls(hour=hour, minute=minute, timezone=timezone.get_current_timezone())
        self.hour = hour
        self.minute = minute
        self.timezone = str(timezone.get_current_timezone())
    def __str__(self):
        return self.timezone + " " + self.hour + ":" + self.minute
    def str(self):
        return self.timezone + " " + self.hour + ":" + self.minute
      
      
      
      
      
      
      
      
      
      