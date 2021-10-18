from django.db import models
from django.db.models.fields import IntegerField

# Create your models here.

class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    F_Name = models.CharField(max_length= 100,default=None)
    M_Name = models.CharField(max_length= 100,default=None)
    L_Name = models.CharField(max_length= 100,default=None)
    Date_Of_Birth = models.DateField(default=None)
    U_Email = models.CharField(max_length= 100,default=None)
    Ph_Number = models.IntegerField(default=None)
    Addr_City = models.CharField(max_length= 100,default=None)
    Addr_State = models.CharField(max_length= 100,default=None)
    Addr_Zip = models.CharField(max_length=100,default=None)
    U_Created_On = models.DateField(default=None)
