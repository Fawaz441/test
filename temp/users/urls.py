from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView,LoginView

app_name = 'users'
urlpatterns = [
    path('signup/',views.SignUp.as_view(),name='signup'),
    path('login/',LoginView.as_view(template_name='users/login.html'),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('user_home/', views.UserHome.as_view(), name='user_home'),

]