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


#class Route(models.Model):
#    origin = models.ForeignKey(Terminal, on_delete=models.CASCADE)
#    destination = models.ForeignKey(Terminal, on_delete=models.CASCADE)


class Schedule(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    start_block = models.IntegerField(validators=[MaxValueValidator(47), MinValueValidator(0)])
    duration_block = models.IntegerField(default=0, validators=[MaxValueValidator(47), MinValueValidator(0)])
    day = models.DateField()
