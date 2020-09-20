from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Task(models.Model):
    task_name = models.CharField(max_length=255)
    task_desc = models.TextField(blank=True)
    task_creator = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    task_taker = models.CharField(max_length=255, blank=True)
    time_created = models.DateTimeField(default=timezone.now)
    time_taken = models.DateTimeField(blank=True, null=True)
    time_done = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f'{self.id} - {self.task_name}'
    
class Message(models.Model):
    sensor_pressure_in = models.CharField(max_length=255, blank=True)
    sensor_pressure_out = models.CharField(max_length=255, blank=True)
    sensor_toc = models.CharField(max_length=255, blank=True)
    sensor_cod = models.CharField(max_length=255, blank=True)
    sensor_uv254 = models.CharField(max_length=255, blank=True)
    sensor_air_pressure = models.CharField(max_length=255, blank=True)
    sensor_temperature = models.CharField(max_length=255, blank=True)
    sensor_altitude = models.CharField(max_length=255, blank=True)
    sensor_cistern = models.CharField(max_length=255, blank=True)
    sensor_flow = models.CharField(max_length=255, blank=True)
    sensor_asu_p10 = models.CharField(max_length=255, blank=True)
    sensor_asu_p25 = models.CharField(max_length=255, blank=True)
    sensor_asu_p100 = models.CharField(max_length=255, blank=True)
    sensor_aeu_p10 = models.CharField(max_length=255, blank=True)
    sensor_aeu_p25 = models.CharField(max_length=255, blank=True)
    sensor_aeu_p100 = models.CharField(max_length=255, blank=True)
    sensor_practice03 = models.CharField(max_length=255, blank=True)
    sensor_practice05 = models.CharField(max_length=255, blank=True)
    sensor_practice10 = models.CharField(max_length=255, blank=True)
    sensor_practice25 = models.CharField(max_length=255, blank=True)
    sensor_practice50 = models.CharField(max_length=255, blank=True)
    sensor_practice100 = models.CharField(max_length=255, blank=True)
    time_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.id} - {self.sensor_pressure_in} - {self.sensor_pressure_out} - {self.sensor_toc} - {self.sensor_cod} - {self.sensor_uv254} - {self.sensor_air_pressure} - {self.sensor_temperature} - {self.sensor_altitude} - {self.sensor_cistern} - {self.sensor_flow} - {self.sensor_asu_p10} - {self.sensor_asu_p25} - {self.sensor_asu_p100} - {self.sensor_aeu_p10} - {self.sensor_aeu_p10} - {self.sensor_aeu_p100} - {self.sensor_practice03} - {self.sensor_practice05} - {self.sensor_practice10} - {self.sensor_practice25} - {self.sensor_practice50} - {self.sensor_practice100}'
    