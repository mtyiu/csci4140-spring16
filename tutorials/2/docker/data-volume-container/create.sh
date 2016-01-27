#!/bin/bash

if [ $# != 0 ]; then
	VOLUMES_FROM=$1
else
	VOLUMES_FROM=dbdata
fi

docker create -v \
	/var/lib/mysql \
	--name ${VOLUMES_FROM} \
	mtyiu/csci4140-asg1-web-base
