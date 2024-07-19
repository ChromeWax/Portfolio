from django.urls import path
from . import views

urlpatterns = [
    path("add/<str:email>/", views.add_email),
    path("remove/<str:email>/", views.remove_email),
]
