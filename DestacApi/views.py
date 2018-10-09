from rest_framework import viewsets
from DestacApi.models import Person, Bus, Terminal, Driver
from DestacApi.serializers import PersonSerializer, BusSerializer, TerminalSerializer, DriverSerializer


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all().order_by()
    serializer_class = PersonSerializer


class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all().order_by()
    serializer_class = BusSerializer


class TerminalViewSet(viewsets.ModelViewSet):
    queryset = Terminal.objects.all().order_by();
    serializer_class = TerminalSerializer


class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all().order_by();
    serializer_class = DriverSerializer
