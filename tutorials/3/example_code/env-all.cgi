#!/usr/bin/env python

import os
import cgitb

print 'Content-Type: text/html'
print

cgitb.enable()

print '<html><body>'
print '''<table>
<th><td>Variable Key</td><td>Value</td></th>'''

for key, value in os.environ.iteritems():
    print '<tr><td>%s</td><td>%s</td></tr>' % (key, value)

# or
# for key in os.environ: 
#     print '<tr><td>%s</td><td>%s</td></tr>' % (key, os.environ[key])

print '</table>'
print '</body></html>'
