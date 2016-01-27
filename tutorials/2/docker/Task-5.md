# Task 5: Build Docker images with `Dockerfile` *(Optional)*

## Command Lists

- `docker build`

## Instructions

This task is optional. Yet, if you want to prepare yourself as a DevOps developer, you should get familiar with the work flow of building Docker images.

In the Docker Lab, we create Docker images by pulling an existing image (e.g., Ubuntu 15.04), logging into its shell, installing packages and modifying configurations, then you `docker commit` and `docker push` to create your own image. What if, for example, you want to use Ubuntu 15.10 instead. YOU NEED TO TYPE ALL THE COMMANDS AGAIN!?

No! There is a better way to prepare a Docker image. As a matter of fact, Docker can build images automatically by reading the instructions from a `Dockerfile`. It is like a shell script, but with some customized options for Docker. According to the official documentation, a `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image.

The web server Docker image I prepared is built from a `Dockerfile`. Let's see its contents [here](https://github.com/mtyiu/csci4140-asg1-web-base/blob/master/Dockerfile).

We will go through the contents in the tutorial if time permits. However, I won't go into the details as they are some syntactic stuffs. You can find its reference [here](https://docs.docker.com/engine/reference/builder/).

Suppose we have a `Dockerfile` in a directory called `build`. To build it, type

	docker build -t [IMAGE_NAME] build/

To push the Docker image to Docker Hub, use the command `docker push` we mentioned in the lecture.

By modifying the contents of the `Dockerfile`, you can make minor changes on the images easily (unless you are "[WET](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)").

An even sexier way to build a Docker image is to use **automated build** - every time you `git push` to, for example, a GitHub repository, Docker Hub builds the image for you! To know more, read [this page](https://docs.docker.com/docker-hub/builds/).

---

Prepared by [Matt YIU Man Tung](http://mtyiu.github.io/)
