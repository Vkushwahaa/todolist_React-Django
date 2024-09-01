from django.urls import path
from . import views

urlpatterns = [
    path("", views.route, name="todo"),
    path('todos/', views.getTodos, name='get-todos'),  
    path('todos/create/', views.createTodo, name='create-todo'),

    # updating and deleting
    path('todos/<str:pk>/delete/', views.deleteTodo, name='delete-todo'),

    
]
