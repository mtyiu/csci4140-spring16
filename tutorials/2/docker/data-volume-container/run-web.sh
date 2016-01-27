#!/bin/bash

docker run \
	-d \
	-p 80:80 \
	--name web \
	--link db:db \
	-e PMA_HOST=db \
	-v ${HOME}/docker-dev:/var/www/html \
	mtyiu/csci4140-asg1-web-base
