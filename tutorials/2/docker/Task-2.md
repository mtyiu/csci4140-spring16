# Task 2: Configure a Docker Container

## Command List

- `docker run` with the flag `-e`
- `docker exec`

## Instructions

You may wonder: how to set up a pre-built Docker image? For example, how can I set up the database password for the MySQL container? The secret is in the `docker run` command.

The developers of the MySQL Docker image know that you need to configure your own container, so they expose several **environment variables** for adjusting the configuration.

From the Docker Hub page, several environment variables are exposed:

- `MYSQL_ROOT_PASSWORD` *(required)*
- `MYSQL_DATABASE` *(optional)*
- `MYSQL_USER` *(optional)*
- `MYSQL_PASSWORD` *(optional)*
- `MYSQL_ALLOW_EMPTY_PASSWORD` *(optional)*

How can we set their values?

1. Go to your Docker machine and type the following command:

		docker run --name db -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5

	In this command, we set `MYSQL_ROOT_PASSWORD` to `password` using the flag `-e`.

	Alternatively, you can create a database `hello_world` with a user `tywong` (password: `sosad`) using the following command:

		docker run --name db -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=hello_world -e MYSQL_USER=tywong -e MYSQL_PASSWORD=sosad -d mysql:5.5

	You can set the values of multiple variables by using `-e` multiple times.

	**Note:** You are free to change the values of the environment variables!

2. Check if your container is up using `docker ps`.

3. To test if the database is ready to use, use the `docker exec` command to access the bash shell inside your `db` container.

		docker exec -it db /bin/bash

	In the shell, type

		mysql -u root -p

	It will prompt you for the password. Type `password`.

4. If you created a database, you can check if it exists by

		USE hello_world

	You should see the message `Database changed`.

---

Prepared by [Matt YIU Man Tung](http://mtyiu.github.io/)
