from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Driver(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


class Bus(models.Model):
    plate = models.CharField(max_length=6)


class Terminal(models.Model):
    name = models.CharField(max_length=20)
    city = models.CharField(max_length=20)


class Route(models.Model):
    origin = models.ForeignKey(Terminal, on_delete=models.CASCADE, related_name='terminal_origin')
    destination = models.ForeignKey(Terminal, on_delete=models.CASCADE, related_name='terminal_destination')


class Schedule(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='scheduled_bus')
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE, related_name='scheduled_driver')
    start_block = models.DateTimeField()
    end_time = models.DateTimeField()
    route = models.ForeignKey(Route, on_delete=models.CASCADE, related_name='scheduled_route')


class Passenger(models.Model):
    complete_name = models.CharField(max_length=100)
    travel = models.ForeignKey(Schedule, on_delete=models.CASCADE, related_name='passenger_schedule')
    seat = models.PositiveIntegerField(validators=[MaxValueValidator(20)])
