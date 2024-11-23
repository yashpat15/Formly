from django.urls import path
from . import views

urlpatterns = [
    path('submit-form/', views.handle_form_submission, name='submit_form'),
]
