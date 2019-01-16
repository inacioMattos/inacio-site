from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView
from .models import Projetos


class homepage(ListView):
	model = Projetos
	template_name = "home.html"