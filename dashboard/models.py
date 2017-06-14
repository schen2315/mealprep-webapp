from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password, make_password, is_password_usable

# Create your models here.
class User(models.Model):
    # primary key will automatically be added
    first = models.CharField(max_length = 20, blank=False)
    last = models.CharField(max_length = 20, blank=False)
    email = models.CharField(max_length = 100, blank=False)
    username = models.CharField(max_length = 15, blank=False, unique=True)
    password = models.CharField(max_length = 100, blank=False)
    date_created = models.DateTimeField('date published', blank=False)

    def __init__(self, first, last, email, username, password):
        print("executing User __init__ function")
        super(User, self).__init__()
        self.first = first
        self.last = last
        self.email = email
        self.username = username
        self.password = make_password(password)
        self.date_created = timezone.now()
    def __str__(self):
        return self.username
