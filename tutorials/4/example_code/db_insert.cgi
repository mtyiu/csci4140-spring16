#!/usr/bin/python

import os
import sys
import MySQLdb
import random

print 'Content-Type: text/plain'
print

sys.stderr = sys.stdout
random.seed()

dbHost = 'db'
dbUser = 'tywong'
dbPass = 'sosad'
dbName = 'hello_world'
conn = MySQLdb.connect(host=dbHost, user=dbUser, passwd=dbPass, db=dbName)

print 'Connection Established. \n'

cursor = conn.cursor()

query = 'INSERT INTO images (filename, imagetype) VALUES (%s, %s)'

imgtype = random.randint(0, 2)
print "Type: %d" %	 imgtype
imgtype = 'png' if imgtype == 0 else 'gif' if imgtype == 1 else 'jpg'
filename = 'haha.' + imgtype

cursor.execute(query, [filename, imgtype])
conn.commit()

print "Filename: " + filename
print "Type: " + imgtype

cursor.close()
conn.close()
