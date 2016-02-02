#!/usr/bin/env python

print 'Content-type: text/html'
print

print """<html>
<body>"""

for i in xrange(0, 6): 
	print '%d<br />' %i

print '''</body>
</html>'''

