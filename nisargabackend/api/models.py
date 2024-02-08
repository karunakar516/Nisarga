from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.hashers import make_password

class MyUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The username must be set')
        user = self.model(username=username, password=password,**extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, password, **extra_fields)

    def set_password(self, user, password):
        user.set_password(password)
        user.save()

class myuser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=35, unique=True)
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=15, blank=True, null=True)
    landmark = models.CharField(max_length=100)
    door_no = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return str(self.username)


class Pickup(models.Model):
    Name=models.CharField(max_length=30)
    door_no=models.CharField(max_length=30,blank=True)
    phone=models.CharField(max_length=30)
    landmark=models.CharField(max_length=30,blank=True,null=True)
    type=models.CharField(max_length=30)
    kind=models.CharField(max_length=40)
    description=models.CharField(max_length=500,blank=True)
    def __str__(self):
        return str(f"{type} pickup")