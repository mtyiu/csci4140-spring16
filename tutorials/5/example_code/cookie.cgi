#!/usr/bin/python

import os
import Cookie
import time
import random

try: 
    cookieDict = Cookie.SimpleCookie(os.environ['HTTP_COOKIE'])
except KeyError: 
    cookieDict = Cookie.SimpleCookie()

try: 
    oldSession = cookieDict['session'].value
except KeyError: 
    oldSession = None

expireTimestamp = time.time() + 1 * 24 * 60 * 60
expireTime = time.strftime("%a, %d-%b-%Y %T GMT", time.gmtime(expireTimestamp))

if (oldSession == None): 
    sessionValue = random.randint(0, 1000)
else:
    sessionValue = oldSession

cookieDict['session'] = sessionValue
cookieDict['session']['expires'] = expireTime

print 'Content-Type: text/plain'
print cookieDict
print

print 'Cookie is set! \nNew session value = %s (Expire on %s)' % (sessionValue, expireTime)
if (oldSession != None): 
    print 'Old sesion exist. Value: %s' % (oldSession)
else: 
    print 'No old session exist. '

print "expireTimestamp: " + str(expireTimestamp)
print "expireTime:      " + str(expireTime)
