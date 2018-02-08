from django.shortcuts import render

from django.shortcuts import HttpResponse
from django.template import Context, loader

def index(request):
    page=loader.get_template("index.html")
    return HttpResponse(page.render())

def Test1(request):
    page=loader.get_template("Test1.html")
    return HttpResponse(page.render())


# Create your views here.
