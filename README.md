# Project Setup and Docker Instructions

This guide will help you set up the project using Docker, PostgreSQL, and Node.js for both the client and server. Follow the steps below to clone the repository, configure the environment, install dependencies, and start the containers.

### Prerequisites

- Docker and Docker Compose should be installed on your machine.
- Git should be installed on your machine.

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

Replace `<repository-url>` with the actual URL of the repository, and `<repository-directory>` with the name of the folder created after cloning the repository.

### Step 2: Set Up the Client

1. Navigate to the `Client` directory:

    ```bash
    cd Client
    ```

2. Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

    **Note**: Modify the `.env` file as necessary to configure environment variables for your application.

3. Install the required Node.js dependencies for the client:

    ```bash
    npm install
    ```

### Step 3: Set Up the Server

1. Navigate to the `Server` directory:

    ```bash
    cd ../Server
    ```

2. Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

    **Note**: Modify the `.env` file as necessary to configure environment variables for the server.

3. Install the required Node.js dependencies for the server:

    ```bash
    npm install
    ```

### Step 4: Start the Client Containers with Docker

1. From the root of the repository, navigate to the `Client` folder:

    ```bash
    cd Client
    ```

2. Start the client containers using Docker Compose in detached mode:

    ```bash
    docker-compose up -d
    ```

    This will build and start the necessary containers for the client application. The `-d` flag runs the containers in the background.

### Step 5: Start the Server Containers with Docker

1. From the root of the repository, navigate to the `Server` folder:

    ```bash
    cd ../Server
    ```

2. Start the server containers using Docker Compose in detached mode:

    ```bash
    docker-compose up -d
    ```

    This will build and start the necessary containers for the server application, including the PostgreSQL database service if configured in `docker-compose.yml`.

### Step 6: Verify the Setup

1. You can verify that both the client and server services are running by checking the Docker containers:

    ```bash
    docker ps
    ```

2. If the services are running correctly, you should be able to access the client and server application through the respective exposed ports (you should check the `docker-compose.yml` file for the correct ports).

### Step 7: Access the Client and Server

- **Client**: The client application should be available at `http://localhost:<client-port>` (check the `docker-compose.yml` for the client port).
- **Server**: The server application should be available at `http://localhost:<server-port>` (check the `docker-compose.yml` for the server port).

### Step 8: Stopping the Containers

If you want to stop the containers, you can run the following command in both the `Client` and `Server` directories:

```bash
docker-compose down
```

This will stop and remove the containers.

---
