# Canadian Army Land Warfare Center - *Experimentation Services Centre* Portal - Backend Repository

Welcome to the README for your project. This document will guide you through the setup process for your development environment and provide instructions on how to use the MongoDB CLI within a temporary Docker container.

- Last Updated : 16 Sep 23 - Aidan Sibley

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your computer:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

## Getting Started

### Step 1: Start Docker

Ensure that Docker is up and running on your local computer. You can start Docker using the following command:

```bash
sudo systemctl start docker
```

### Step 2: Clone repository

```bash
git clone https://github.com/ajsib/esc.calwc.back
cd <repository_directory>
```

replace `<repository_directory>` with the directory of the project

### Step 3: Set Up MongoDB Container

We will be using an official MongoDB image:  Update/Create the `docker-compose.yml`` file in the project root directory to match the following structure:

```yml
version: '3.1'

services:
  mongodb:
    image: mongo:latest
    container_name: calwc_mongodb
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=<askDevforMONGOPASSWORD>
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data
```
This configuration sets up a MongoDB container using the official MongoDB image.

### Step 4: Build and Start the Containers

Initiate and start the containers using Docker Compose:

```bash
docker-compose up -d
```
### Step 5: Access MongoDB

To access MongoDB, you can use MongoDB Compass, Mongo CLI or a similar tool, connecting using the following URI:

```
mongodb://root:<askDevforMONGOPASSWORD>@localhost:27017/
```
You can also access the MongoDB CLI within the Docker container by opening a new terminal window and running the following command:

```bash
docker exec -it calwc_mongodb mongo -u root -p <askDevforMONGOPASSWORD> --authenticationDatabase admin
```

You are now connected to the MongoDB database and can perform necessary database management and development tasks.

## Additional Info

- **MongoDB container name**: `calwc_mongodb`
- **MongoDB port**:  `27017`
- **MongoDB root password**: Contact [Cpl Aidan Sibley](mailto:aidan.sibley@ecn.forces.gc.ca)
