# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Reloading) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Using docker / node:alpine means we have isolated the specific node version to make sure everyone is running the same version. Note: node:alpine yields a much smaller Docker image size, and as of August 2023 has the fewest OS dependencies and zero detected security vunerabilities.

# Getting started

We are using the node:alpine image to build this env, as it's small in size and suitable for production. In our docker-compose.yml file we are using the below config:

- entrypoint: /bin/sh  
  The entry point refers to the application that will execute at the time of entry within the container.
- working_dir:  
  The working_dir is the directory for the project within the container. When you log in to the container you will land in this directory
- type: bind:  
  Allows us to use the host file within the container and update the files within the container as we update / add anything, and vice versa. With this, you will need build and run it every time as you will modify the host.

# Build container / image

Run the below command to build the image on your local machine and start the container. You only need to run this command the first time, and whenever you make changes to the docker-compose.yml file:

docker-compose up --build --no-recreate -d (or use 'npm run docker-build')

From the second time, we can use 'docker-compose up -d' (or use 'npm run docker-up')

Now that our container is up, you should be able to check it using 'docker-compose ps'

# Start the application

We have a running container, but haven't installed or run the react app. We need to login to the container and then install npm scripts / run the app:

docker exec -it vite-react-example sh (or use 'npm run docker-login')

We have entered the container and now need to run the commands to install the Node packages and start the app.

npm i && npm run dev (or use 'npm run docker-install')

It will install the packages and the application will run on the defined ports. You should be able to access the application at http://localhost:8000/ now, and hot reloading should work straight away.

# Running for production

We want to enfore builds with 'npm ci' - this prevents surprises in a continuous integration flow because it halts if any deviations from the lockfile are made.

In the case of building a Docker image for production, we want to ensure that we only install production dependancies, so should use the below (for best practice installing npm dependencies in a container image):

npm ci --only=production

We should also be using ENV NODE_ENV production in our Dockerfile
