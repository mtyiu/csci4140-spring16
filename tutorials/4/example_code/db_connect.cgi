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

print 'Connection Established. \n'

conn.close()

print 'Connection Closed. '
