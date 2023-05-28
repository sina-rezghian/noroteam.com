from django.contrib import admin
from .models import contact_us, Customer, Image
# Register your models here.
class contact_us_model(admin.ModelAdmin):
    list_display = ["id", "name", "email", "subject", "message", "date"]
class Image_model(admin.ModelAdmin):
    list_display = ["id", "image1"]
class Customer_model(admin.ModelAdmin):
    filter_horizontal = ("image_address",)
    list_display = ["id", "user", "compnay_name", "paypal_account", "description", "plan_section"]
admin.site.register(contact_us, contact_us_model)
admin.site.register(Image, Image_model)
admin.site.register(Customer, Customer_model)
# Register your models here.
