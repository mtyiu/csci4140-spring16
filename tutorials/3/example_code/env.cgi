#!/usr/bin/env python

import os
import cgitb

print 'Content-Type: text/plain'
print

cgitb.enable()

key = 'QUERY_STRING'

val = os.environ[key]
print val
