#!/usr/bin/python

import os
import MySQLdb

print 'Content-Type: text/plain'
print

dbHost = 'db'
dbUser = 'tywong'
dbPass = 'sosad'
dbName = 'hello_world'
conn = MySQLdb.connect(host=dbHost, user=dbUser, passwd=dbPass, db=dbName)

cursor = conn.cursor()

query = 'SELECT * FROM images'
cursor.execute(query)

print 'Total: %d'%(cursor.rowcount)

images = cursor.fetchall()

for image in images: 
    print image

cursor.close()
conn.close()

