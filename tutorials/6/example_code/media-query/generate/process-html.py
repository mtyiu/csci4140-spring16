#usr/bin/env python

f = open( 'color.txt', 'r' )

width = 1200

for line in f:
	line = line.strip()
	print '\t<div class="box" id="box-%d">%d</div>' %( width, width )
	width = width - 10

f.close()
