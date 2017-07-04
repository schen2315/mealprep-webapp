from django.conf.urls import url
from django.views.generic.base import RedirectView

from . import views

urlpatterns = [
#    url(r'^.*', RedirectView.as_view(url='/login', permanent=False), name='index'),
    url(r'^$', views.index, name='index'),
    url(r'^nutrition/$', views.index, name='nutrition'),
    url(r'^settings/$', views.index, name='settings'),
    url(r'^shopping/$', views.index, name='shopping'),
    url(r'^spendings/$', views.index, name='spendings'),
    url(r'^login/$', views.index, name='login'),
    url(r'^login/thankyou/$', views.index, name='login/thankyou'),
    url(r'^signup/$', views.index, name='signup'),
#    url(r'^home/$', views.index, name='home'),
    url(r'^isvalidnewuser/$', views.isValidNewUser, name='isValidNewUser'),
    url(r'^createuser/$', views.createUser, name='createUser'),
    url(r'^loginuser/$', views.loginUser, name='loginUser'),
    url(r'^logoutuser/$', views.logoutUser, name='logoutUser'),
    url(r'^getsession/$', views.getSession, name='getSession'),
    url(r'^getweek/$', views.getWeek, name='getWeek')
]
