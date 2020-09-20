from django.contrib import admin
from .models import Task
from .models import Message

admin.site.register(Task)
admin.site.register(Message)