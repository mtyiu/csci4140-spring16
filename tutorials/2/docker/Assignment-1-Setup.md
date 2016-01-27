# Assignment 1 Docker Set-up (Tentative)

We will use Docker as the development and grading platform for Assignment 1. You are restricted to use the following images:

- [`mtyiu/csci4140-asg1-web-base`](https://hub.docker.com/r/mtyiu/csci4140-asg1-web-base/): Base image for the web server, with Apache, Python, MySQLdb, and phpMyAdmin installed
- [`mysql:5.5`](https://hub.docker.com/_/mysql/): MySQL 5.5

Our grading platform will be set up by following the instructions in this lab. The web server and MySQL containers will be linked together using `docker run --link`.

We will mount your submitted code to the directory `/var/www/html`. You need to put all your CGI scripts in the directory `cgi-bin`.
