from django.urls import path
from . import views
app_name='FlyingCircus'
urlpatterns=[
    path('',views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/',views.ResultsView.as_view(),name='results'),
    path('GoTo/', views.GoTo,name='GoTo'),
    path('Test/', views.Test,name='Test'),
    path('DisplayTest/',views.DisplayTest,name='DisplayTest'),
    path('Routes/', views.getPath,name='Route'),
    path('getLabels/', views.getRoomNames,name='getLabels'),
    path('validNames/',views.validRooms,name='getValidNames')
]