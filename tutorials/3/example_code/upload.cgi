#!/usr/bin/python

import os
import cgi
import cgitb

print "Content-Type: text/html"
print

cgitb.enable()

form = cgi.FieldStorage()

print '<html><body>'

saveDir = os.getenv('OPENSHIFT_DATA_DIR')
readDir = 'data'

if ('pic' not in form):
    print "No file uploaded. "
elif (not form['pic'].filename):
    print "No file selected. "
else:
    fileitem = form['pic']

    print "Filename: " + fileitem.filename

    (fn, ext) = os.path.splitext(os.path.basename(fileitem.filename))
    savePath = os.path.join(saveDir, fn + ext)

    open(savePath, 'wb').write(fileitem.file.read())

    print 'File uploaded. <br /><img src="%s" />'%(os.path.join('data', fn + ext))

print '</body></html>'
