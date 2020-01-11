from django.db import models
from django.contrib import auth
# Create your models here.

class User(auth.models.User,auth.models.PermissionsMixin,models.Model):
    referrals = models.IntegerField(default=1,blank=False,null=False)

    def add_referrals(self):
        self.referrals+=1

    def __str__(self):
        return self.username


