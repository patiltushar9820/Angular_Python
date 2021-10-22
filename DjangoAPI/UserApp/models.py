from django.db import models
from django.db.models.fields import DateField, IntegerField

# Create your models here.

class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    F_Name = models.CharField(max_length= 100,default=None)
    M_Name = models.CharField(max_length= 100,default=None)
    L_Name = models.CharField(max_length= 100,default=None)
    Date_Of_Birth = models.DateTimeField()
    U_Email = models.EmailField(max_length= 100,default=None)
    Ph_Number = models.IntegerField(default=None)
    Notes1 = models.TextField(max_length=1000,default=None)
    Addr_line_1 = models.TextField(max_length=100,default=None)
    Addr_City = models.CharField(max_length= 100,default=None)
    Addr_State = models.CharField(max_length= 100,default=None)
    Addr_Zip = models.IntegerField(default=None)
    U_Created_On = models.DateField(default=None)
