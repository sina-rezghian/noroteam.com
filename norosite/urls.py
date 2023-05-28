from django.urls import path
from . import views
app_name = 'norosite'
urlpatterns = [
    path('', views.index, name='index'),
    path('message_submitted', views.contact_us_submit, name='contact_us')
#     path('login/', views.login, name='login')
]