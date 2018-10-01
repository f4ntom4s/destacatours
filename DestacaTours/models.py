from django.db import models


class Person(models.Model):
	name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)


class Driver(models.Model):
	person = models.ForeignKey(Person, on_delete=models.CASCADE)


class Bus(models.Model):
	plate = models.CharField(min_length=6, max_length=6)


class Route(models.Model):
	#origin
	#destination


class Schedule(models.Model):
	bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
	driver = models.ForeignKey(Driver, on_delete=models.CASCADE)