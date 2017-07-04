from django.http import HttpResponse
from django.shortcuts import render
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect
from bs4 import BeautifulSoup
import re
import json
import datetime
#import all models
from dashboard.models import User
from dashboard.models import Profile
from dashboard.models import Recipe
from dashboard.models import Meal
from dashboard.models import Meal_type
from dashboard.models import Schedule
from dashboard.models import Time

num2day = (                     \
            (0, 'Monday'),      \
            (1, 'Tuesday'),     \
            (2, 'Wednesday'),   \
            (3, 'Thursday'),    \
            (4, 'Friday'),      \
            (5, 'Saturday'),    \
            (6, 'Sunday')       \
          )
day2num = (                     \
            ('Monday', 0),      \
            ('Tuesday', 1),     \
            ('Wednesday', 2),   \
            ('Thursday', 3),    \
            ('Friday', 4),      \
            ('Saturday', 5),    \
            ('Sunday', 6)       \
          )
day2abbr = (                          \
              ('Monday', 'mon'),      \
              ('Tuesday', 'tue'),     \
              ('Wednesday', 'wed'),   \
              ('Thursday', 'thu'),    \
              ('Friday', 'fri'),      \
              ('Saturday', 'sat'),    \
              ('Sunday', 'sun')       \
            )
abbr2day = (                          \
              ('mon','Monday'),      \
              ('tue','Tuesday'),     \
              ('wed','Wednesday'),   \
              ('thu','Thursday'),    \
              ('fri','Friday'),      \
              ('sat','Saturday'),    \
              ('sun','Sunday')       \
            )
day_abbr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

num2day = dict(num2day)
day2num = dict(day2num)
day2abbr = dict(day2abbr)
abbr2day = dict(abbr2day)

def index(request):
    csrf_token = get_token(request) # should set the csrf token
    # eventually check if user is logged in using cookies
    # for now we will use an example user 'usr1'
    print(request.session.items())
    return render(request, 'dashboard/index.html')
@csrf_exempt    #turn off for production
def loginUser(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        # check user existence
        try:    #since all emails must be unique u should only be one object or an exception is thrown
            u = User.objects.get(email=body_data['email'])
        except Exception:
            return JsonResponse({'success': -1, 'message': 'No account exists for this email address'})
        if(not u.check_password(body_data['password'])):
            return JsonResponse({'success': -1, 'message': 'Incorrect password for this email address'})
        # create session for user
        request.session['user_id'] = u.id
        return JsonResponse({'success': 1, 'message': 'Successfully logged in'})
@csrf_exempt #turn off for production
def logoutUser(request):
    try:
        del request.session['user_id']
    except KeyError:
        return redirect('/');
    return redirect('/');
def _getSession(user_id):
        try:
            u = User.objects.get(id=user_id)
        except Exception:
            return False
        return u
@csrf_exempt #turn off for production
def getSession(request):
    try:
        if _getSession(request.session['user_id']) == False:
            return JsonResponse({'success': -1, 'message': 'User is not currently logged in'})
    except Exception:
        return JsonResponse({'success': -1, 'message': 'User is not currently logged in'})
    return JsonResponse({'success': 1, 'message': 'Successfully found user session'})
@csrf_exempt
def isValidNewUser(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        res = _isValidNewUser(body_data)
        return JsonResponse(res)
@csrf_exempt
def createUser(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        res = _isValidNewUser(body_data)
        valid = True
        for key in res:
            if res[key] != 'OK':
                valid = False
                break
        if valid == False:
            return HttpResponse("False")
        else:
            #post processing
            body_data['first'] = _conv2ValidName(body_data['first'])
            body_data['last'] = _conv2ValidName(body_data['last'])
            # create the new user in the database
            u = User.create(                                                \
                                body_data['first'], body_data['last'],      \
                                body_data['email'], body_data['username'],  \
                                body_data['password']                       \
                            )
            u.save()
            print("User successfully created")
            return HttpResponse("True")
@csrf_exempt
def getWeek(request):
    if request.method == 'POST':
        u = _getSession(request.session['user_id'])
        if not u:
            return JsonResponse({'success': -1, 'message': 'User is not currently logged in'})
        else:
            now = datetime.datetime.now()
            print("hour", now.hour) #UTC 24 hour time
            print("minute", now.minute) #UTC 24 hour time
            weekDetailed = []
            week = []
            for i in range(0, 7):
                dif = now.weekday()-i
                delta = datetime.timedelta(days=dif)
                d1 = now - delta
                print(d1.strftime("%A"))
                print(d1.strftime("%B"))
                print(d1.day)
                print(d1.year)
                # use timedelta
                date = {                                          \
                         'dayOfWeek': d1.strftime("%A"),          \
                         'month': d1.strftime("%B"),              \
                         'day': d1.day,                           \
                         'year': d1.year                          \
                       }
                if(now.weekday() == d1.weekday()):
                    today = True
                else:
                    today = False
                weekDetailed.append({'date':date,'today':today,'meals':[]})
                week.append({'date':date,'today':today,'recipes': []})
            print(weekDetailed)
            # query database for this user's week
            print(u.username)
            # later change label to represent the chosen schedule
            s = Schedule.objects.filter(user=u.id, label='strict caloric diet')
            # s is a list of Schedule objects
            
            # each schedule with this label
            for i in range (0, len(s)):
                print("schedule", i)
                m = s[i].meal 
                p = m.profile
                p = {                                       \
                        'profile': m.profile.name,          \
                        'recipe':  m.recipe.__str__()       \
                    }
                meal_type = m.meal_type
                time = meal_type.time
                t = _conv24to12hr(time, "UTC")
                
                # for each day of the week
                for j in range(0, len(day_abbr)):
                    # get whether the meal applies to this day of the week
                    if(getattr(s[i], day_abbr[j])):
                        # this day of week is true
                        # check if a meal object with the current meal_type exists in the list
                        d = day2num[abbr2day[day_abbr[j]]]
                        # append to week
                        week[d]['recipes'].append({'name': m.recipe.__str__(), 'type': \
                                                   meal_type.label})
                        print(weekDetailed[d]['meals'])
                        appended = False
                        for k in range(0, len(weekDetailed[d]['meals'])):
                            # append p to this one
                            if(weekDetailed[d]['meals'][k]['type'] == meal_type.label):
                                print("same meal types")
                                weekDetailed[d]['meals'][k]['profiles'].append(p)
                                appended = True
                                break
                        if(not appended):
                            # else create a new entry in meals
                            weekDetailed[d]['meals'].append({     \
                                  'profiles': [p],                \
                                  'type': meal_type.__str__(),    \
                                  'time': t                 })                            
            return JsonResponse({'success': 1, 'message': 'Successfully found user session',  \
                                'data': {'weekDetailed': weekDetailed,                        \
                                         'week': week }})
def _conv2ValidName(s):
    s = s.lower()
    s = s[0].upper() + s[1:]
    return s
def _isValidNewUser(body_data):
    res = {
        'first': 'OK',
        'last': 'OK',
        'username': 'OK',
        'email': 'OK',
        'password': '',
        'password_again': 'OK'
    }
    # check all fields up for new user signup for validity
    if len(body_data['first']) < 1:
        res['first'] = "You need a first name"
    if re.search('[^a-zA-Z]', body_data['first']) != None:
        res['first'] = "Your name can only contain letters"
    if len(body_data['last']) < 1:
        res['last'] =   "You need a last name"
    if re.search('[^a-zA-Z]', body_data['last']) != None:
        res['first'] = "Your name can only contain letters"
    if re.search('[^a-zA-Z0-9._]', body_data['username']) != None or len(body_data['username']) < 3:
        res['username'] = "You need a username. It can contain letters, numbers, periods, and underscores and must be at least 3 characters long."
    if len(User.objects.filter(username=body_data['username'])) >= 1:
        res['username'] = body_data['username'] + " already exists"
    if re.search('[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z0-9.]+', body_data['email']) == None:
        res['email'] = "You need a valid email address"
    if len(User.objects.filter(email=body_data['email'])) >= 1:
        res['email'] = body_data['email'] + " already exists"
    if len(body_data['password']) < 8:
        res['password'] = res['password'] + "Must be at least 8 characters long\n"
    if re.search('\d',body_data['password']) == None:
        res['password'] = res['password'] + "Must Contain at least One Number\n"
    if re.search('[A-Z]',body_data['password']) == None:
        res['password'] = res['password'] + "Must Contain at least One Uppercase Character\n"
    if re.search('[a-z]',body_data['password']) == None:
        res['password'] = res['password'] + "Must Contain at least one Lowercase Character\n"
    if re.search('[_+\-.,!?@#$%^&*();:<>]',body_data['password']) == None:
        res['password'] = res['password'] + "Must Contain at least one special Character\n"
    if re.search('[^0-9a-zA-Z_+\-.,!?@#$%^&*();:<>]', body_data['password']) != None:
        res['password'] = res['password'] + "Must contain only the above mentioned characters\n"
    if res['password'] == '':
        res['password'] = 'OK'
    if(body_data['password'] != body_data['password_again']):
        res['password_again'] = "Passwords must match"
    return res

# time and timezone to convert to 
def _conv24to12hr(time, timezone):
    t = time.split(" ")
    if(t[0] == timezone):
        # only have to convert to 12 hr from 24
        t = t[1].split(":")
        am = True
        if(int(t[0]) > 12):
            am = False
            t[0] = int(t[0]) - 12
    return {'hour': t[0], 'minute': t[1], 'am': am}
            
    return "this function converts 24hr to 12hr time format"
  
  
  