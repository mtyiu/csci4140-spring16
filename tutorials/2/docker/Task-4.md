# Task 4: Manage Data in Containers with Data Volume Containers

## Command List

- `docker create`
- `docker run` with the flag `--volumes-from`
- `docker rm -v`

## Instructions

To back up the data in the MySQL database, you may want to mount a local directory the folder `/var/lib/mysql` just like what we did on the web server container. However, after you mount the directory, you will find that the service cannot be started. The reason is that it cannot write to the directory due to permission restriction (so I have to prepare my own image for the web server container which can bypass this restriction...).

So, how can we back up the data in the database? The answer is **data volume container**. Data volume container is a special type of container with a volume to share. This container does not run an application. We can use any existing images to start the data volume container so that the containers are using layers in common, saving disk space.

1. To create a data volume container, type

		docker create -v /var/lib/mysql --name [DATA_VOLUME_CONTAINER_NAME] mtyiu/csci4140-asg1-web-base

	The argument after `-v` specifies the path for mounting the data volume. For MySQL, we need to mount to `/var/lib/mysql` so we put this path there.

2. Stop and remove both the MySQL and web server containers. We will create them again.

		docker rm -f [YOUR_MYSQL_CONTAINER_NAME] [WEB_SERVER_CONTAINER_NAME]

3. Start the MySQL container using the following command:

		docker run --name [YOUR_MYSQL_CONTAINER_NAME] -e MYSQL_ROOT_PASSWORD=[YOUR_ROOT_PASSWORD] -e MYSQL_DATABASE=[YOUR_DATABASE_NAME] -e MYSQL_USER=[YOUR_USERNAME] -e MYSQL_PASSWORD=[YOUR_PASSWORD] --volumes-from [DATA_VOLUME_CONTAINER_NAME] -d mysql:5.5

	The only difference is that we include a new flag `--volumes-from`. By specifying the name of a data volume container you want to mount to, you can mount different data volumes to the same image.

4. If you want to remove the data volume container later, use the command

		docker rm -v [DATA_VOLUME_CONTAINER_NAME]

	**Important.** Do not remove the data volume container, unless you really know that you want to erase all your data in this container!

5. (Optional) Backup, restore, or migrate data volumes

	Please read the [official documentation](https://docs.docker.com/engine/userguide/dockervolumes/#backup-restore-or-migrate-data-volumes).

---

Prepared by [Matt YIU Man Tung](http://mtyiu.github.io/)
