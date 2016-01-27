# Task 1: Explore repositories at Docker Hub

## Command Lists

- `docker pull`

## Instructions

Many developer already push their Docker images to [Docker Hub](https://hub.docker.com/). Let's explore the repositories together!

1. Visit [Docker Hub](https://hub.docker.com/).

2. Suppose you want to get an MySQL image. Let's search `mysql`. You can see many matching results. Select the [official](https://hub.docker.com/_/mysql/) one.

3. You can find the documentation on this page. You may find the word "tag" in the page. So what is "tag"?

	If you remember that when you create your own Docker image, you need to specify the name of the image. What if you want to use the same image name, and build images for different versions? Here comes the tag.

	Tag usually refers to the version number of the Docker image, though it can also represents different variants of the images.

	You can find the available tags on the Docker Hub repository page. For `mysql`, you can find many different tags, e.g., 5.5, 5.6, 5.7 and latest.

	We will use the image with the tag 5.5.

4. Open your Docker machine and type

		docker pull mysql:5.5

5. Done! Let's go to the [next task](Task-2.md).

---

Prepared by [Matt YIU Man Tung](http://mtyiu.github.io/)
