#!/usr/bin/env python

import cgi
import cgitb

print 'Content-Type: text/html'
# Try replace by following and see =D
# print 'Content-Type: text-plain'
print

cgitb.enable()

form = cgi.FieldStorage()

user = form.getvalue('login', None)
try:
    passwd = form.getlist('passwd')[0]
except IndexError:
    # No password typed in
    passwd = None
action = form['action'].value

hehe = form.getlist('hehe')[0]

print '<html><body>'

print 'You have pressed %s. <br />' % (action)

print          # This is printing new line in python / HTTP response
print '<br />' # This is printing new line in HTML

if (action == 'Login'):
    if (user == 'tywong' and passwd == 'sosad'):
        print "You have successfully logged in as %s. <br />" % (user)
    elif (not user):
        print "You did not type in username? <br />"
    else:
        print "You have failed to login. <br />"

print '</body></html>'
