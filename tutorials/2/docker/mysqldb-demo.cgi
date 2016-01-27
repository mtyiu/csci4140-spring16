#!/usr/bin/env python

import MySQLdb

print 'Content-type: text/plain\n'

conn = MySQLdb.connect(
	host = 'db',
	user = 'tywong',
	passwd = 'sosad',
	db = 'hello_world'
)
cursor = conn.cursor()
cursor.execute( 'CREATE TABLE IF NOT EXISTS test (item VARCHAR(32), value VARCHAR(255))' )
cursor.execute( 'INSERT INTO test VALUES("foo", "bar")' )
conn.commit()

print 'Database updated!'
