from rest_framework import serializers
from .models import myuser,Pickup

class myuserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model = myuser
        fields = ('id', 'email','username', 'mobile_number',  'password','landmark','door_no')
class Pickup(serializers.ModelSerializer):
    class Meta:
        model= Pickup
        fields=('type','kind','description')

