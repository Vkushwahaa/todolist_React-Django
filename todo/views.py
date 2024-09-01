from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
from .models import Todo
from django.views.decorators.csrf import csrf_protect


@api_view(["GET"])
def route(request):
   route = [
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
   return Response(route)

@api_view(['GET'])
def getTodos(request):
    body = Todo.objects.all()
    serialzier = TodoSerializer(body,many=True)
    return Response(serialzier.data)


@csrf_protect
@api_view(['POST'])
def createTodo(request):
    if request.method == 'POST':
        data = request.data
        todo = Todo.objects.create(body=data['body'])
        serializer = TodoSerializer(todo,many=False)
        return Response(serializer.data)


@csrf_protect
@api_view(["DELETE"])
def deleteTodo(request,pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return Response('deleted')