#!/bin/bash

docker run \
	--name db \
	-e MYSQL_ROOT_PASSWORD=sosad \
	-e MYSQL_DATABASE=hello_world \
	-e MYSQL_USER=tywong \
	-e MYSQL_PASSWORD=sosad \
	-d \
	mysql:5.5

