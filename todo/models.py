from django.db import models

class Todo(models.Model):
    body = models.TextField(blank=True,null=True)
    
    def __str__(self) :
        body = self.body
        return body[0:40]
