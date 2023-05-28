from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'users'
urlpatterns = [
    path('', views.login_signup, name='login'),
    # Other URL patterns...
]
