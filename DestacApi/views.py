from rest_framework import viewsets
from DestacApi.models import Bus, Terminal, Driver
from DestacApi.serializers import BusSerializer, TerminalSerializer, DriverSerializer


class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all().order_by('id')
    serializer_class = BusSerializer


class TerminalViewSet(viewsets.ModelViewSet):
    queryset = Terminal.objects.all().order_by('name');
    serializer_class = TerminalSerializer


class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all().order_by('last_name');
    serializer_class = DriverSerializer
