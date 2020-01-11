from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import CreateView,TemplateView
from .forms import UserMakeForm
from django.urls import reverse_lazy
from .models import User
# Create your views here.

class SignUp(CreateView):
    form_class = UserMakeForm
    success_url = reverse_lazy('users:login')
    template_name = 'users/signup.html'

class UserHome(TemplateView):
    template_name = 'users/user_home.html'

@login_required()
def add_referral():
    print("Hey there")