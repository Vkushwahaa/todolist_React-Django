
from django.contrib import admin
from django.urls import path,include
from django.shortcuts import render
def index_view(request):
    return render(request,'dist/index.html')

urlpatterns = [
    
    
    path("admin/", admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/',include('todo.urls')),
    path('',index_view,name="index"),
    
]
