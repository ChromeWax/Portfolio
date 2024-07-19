from django.shortcuts import render
from django.http import HttpResponse
import re, json

email_list = set()

# Create your views here.
def add_email(request):
    if request.method == "POST":
        received_json_data = json.loads(request.body)
        email = received_json_data["email"]

        if not is_valid_email(email):
            return HttpResponse(status=401)
        if email in email_list:
            return HttpResponse(status=401)
        else:
            email_list.add(email)
            return HttpResponse(status=200)

    return HttpResponse(status=400)

def remove_email(request):
    if request.method == "DELETE":
        received_json_data = json.loads(request.body)
        email = received_json_data["email"]

        if not is_valid_email(email):
            return HttpResponse(status=401)
        elif email in email_list:
            email_list.remove(email)
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=401)

    return HttpResponse(status=400)

def is_valid_email(email):
    """Check if the email is a valid format."""

    # Regular expression for validating an Email
    regex = r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$'

    # If the string matches the regex, it is a valid email
    if re.match(regex, email):
        return True
    else:
        return False
