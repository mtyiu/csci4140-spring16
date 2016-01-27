#!/bin/bash

if [ $# != 0 ]; then
	VOLUMES_FROM=$1
else
	VOLUMES_FROM=dbdata
fi

docker run \
	--name db \
	-e MYSQL_ROOT_PASSWORD=sosad \
	-e MYSQL_DATABASE=hello_world \
	-e MYSQL_USER=tywong \
	-e MYSQL_PASSWORD=sosad \
	--volumes-from ${VOLUMES_FROM} \
	-d \
	mysql:5.5

