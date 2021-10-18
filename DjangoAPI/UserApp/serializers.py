from rest_framework import serializers
from UserApp.models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= Users
        fields = ('UserId',
                'F_Name',
                'M_Name',
                'L_Name',
                'Date_Of_Birth',
                'U_Email',
                'Ph_Number',
                'Addr_City',
                'Addr_State',
                'Addr_Zip',
                'U_Created_On'
                )