from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


class Driver(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)


class Bus(models.Model):
    plate = models.CharField(max_length=6)


class Terminal(models.Model):
    name = models.CharField(max_length=20)


class Route(models.Model):
    origin = models.ForeignKey(Terminal, on_delete=models.CASCADE, related_name='terminal_origin')
    destination = models.ForeignKey(Terminal, on_delete=models.CASCADE, related_name='terminal_destination')


class Schedule(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    start_block = models.DateTimeField(null=False)
    end_time = models.DateTimeField(null=False)
    route = models.ForeignKey(Route, on_delete=models.CASCADE, null=True)


class Passenger(models.Model):
    travel = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    seat = models.PositiveIntegerField(validators=[MaxValueValidator(20)])
