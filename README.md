# Template FullStack

This is a template for full stack development using Typescript, Express, MongoDB and React

## Requirements to Run

- NPM or YARN
- Docker
- Docker-Composer

## How to run development

Use `./startdevelopent.sh` to run the project on the local server

After that you cant use **docker-compose** whenever you want:

`$ docker-compose up --build`

If you want to close to close the container use `Ctrl + C`

## Cleaning containers

Use the command `sudo docker system prune` to clean all images, networks and containers of your system

## Important Information

- Connect to `localhost:8000` to access the backend
- Connect to `localhost:3000` to access the frontend
- Swagger on `localhost:8000/swagger`
- There is no need to create a .env file
