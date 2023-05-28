from django.shortcuts import render
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from norosite.models import contact_us
# Create your views here.
def index(request):
    return render(request, 'main.html')
def contact_us_submit(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        contact = contact_us(name=name, email=email, subject=subject, message=message)
        contact.save()
        return redirect('norosite:index')
    
    return render(request, 'main.html')
        

# def login_index(request):
#     if not request.user.is_authenticated:
#         return HttpResponseRedirect(reverse('login'))
#     return render(request, )
# def login(request):
#     if request.method == 'POST':
#         email = request.POST['e-mail']
#         password = request.POST['pass-word']
#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             login(request, user)
#             return HttpResponseRedirect(reverse("index"))
#         else:
#             return render(request, 'main.html', {"meesage":"invalid password or username"})
#     return render(request, 'sign.html')
# def logout(request):
#     logout(request)
#     return render(request, "login.html", {"message": "Logged out"})
# def signup(request):
#     pass