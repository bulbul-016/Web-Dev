from django.contrib import admin
from django.urls import path, re_path
from main.views import home, about, hours_ahead



urlpatterns = [
    # path('admin/', admin.site.urls),
    path('home/', home), 
    path('about/', about), 
    # re_path(r'^time/plus/\d+/$', hours_ahead),
    re_path(r'^time/plus/(\d{1,2})/$', hours_ahead),
]
