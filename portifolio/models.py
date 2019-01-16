from django.db import models

# Create your models here.

class Projetos(models.Model):
	nome = models.CharField(max_length=200)
	desc = models.TextField()
	data_criacao = models.DateField()
	importancia = models.IntegerField()
	link = models.URLField()