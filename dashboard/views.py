from django.http import HttpResponse
from django.shortcuts import render

# # Create your views here.
# def index(request):
#
#     # eventually check if user is logged in using cookies
#     # for now we will use an example user 'usr1'
#     print(request.session.items())
#     return render(request, 'dashboard/index.html')

def index(request):
    if request.method == 'POST':
        if request.session.test_cookie_worked():
            request.session.delete_test_cookie()
            return HttpResponse("You're logged in.")
        else:
            return HttpResponse("Please enable cookies and try again.")
    request.session.set_test_cookie()
    return render(request, 'dashboard/index.html')
