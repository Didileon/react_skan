from rest_framework import serializers
from .models import APi

class APiSerializer(serializers.ModelSerializer):
    class Meta:
        model = APi
        fields = '__all__'
