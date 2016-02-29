#/usr/bin/env python

f = open( 'color.txt', 'r' )
tmpl_f = open( 'demo-template.css', 'r' )
footer_f = open( 'demo-footer.css', 'r' )

tmpl = tmpl_f.read()
footer = footer_f.read()

width = 1200

for line in f:
	line = line.strip()
	min_width = width - 10
	max_width = width - 1
	box_width = width
	print tmpl %( min_width, max_width, line, box_width )
	width = width - 10

print footer

f.close()
tmpl_f.close()
footer_f.close()
