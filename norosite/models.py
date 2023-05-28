from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
import datetime
# Create your models here.
# class Customer(models.Model):
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.cascade)
#     def __str__(self):
#         return f'{self.user.first_name} {self.user.last_name}'
class Image(models.Model):
    image1 = models.ImageField(upload_to = "norosite\static\images", blank = True)
    def __str__(self) :
        return f"{self.image1.name}"
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    compnay_name = models.CharField(max_length=50, blank = True)
    paypal_account = models.CharField(max_length=200)
    image_address = models.ManyToManyField(Image, blank=True, related_name="image_field")
    description = models.CharField(max_length=500)
    plan_section= models.CharField(max_length=100)
class contact_us(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=50)
    subject = models.CharField(max_length=80)
    message = models.CharField(max_length=1000)
    date = models.DateTimeField(default=datetime.datetime.now)
# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)

