#!/usr/bin/perl -w

print 'Content-type: text/html'
print

print """<html>
<body>"""

for i in xrange(0, 6): 
	print i + '<br />'

print '''</body>
</html>'''

