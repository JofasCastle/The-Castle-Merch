#!/bin/bash

# Define the image name
IMAGE_NAME="castlemerch:latest"

# Find the container ID of the running image
CONTAINER_ID=$(docker ps -q -f ancestor=$IMAGE_NAME)

# Check if the container ID is found
if [ -n "$CONTAINER_ID" ]; then
    echo "Stopping container $CONTAINER_ID..."
    docker stop $CONTAINER_ID

    echo "Removing container $CONTAINER_ID..."
    docker rm $CONTAINER_ID
else
    echo "No running container found for image $IMAGE_NAME."
fi

echo "Pulling from git"
git pull
# Build a new image from the Dockerfile in the current directory
echo "Building new Docker image..."
docker build -t $IMAGE_NAME .


echo "Running image"
docker run --restart unless-stopped -d -p 3030:3000 $IMAGE_NAME

echo "Script completed."
