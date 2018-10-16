from DestacApi.models import Bus, Terminal, Driver
from rest_framework import serializers


class BusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'


class TerminalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Terminal
        fields = ['id', 'name', 'city']


class DriverSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Driver
        fields = ['id', 'first_name', 'last_name']
