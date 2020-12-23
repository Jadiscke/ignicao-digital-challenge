# Ignicao Digital Challenge

This is a challenge for [Ignicao digital](https://www.ignicaodigital.com.br/).
The objective of the project is to make a simple API and a Simple Client to consume the API.

## Explaining the Decisions

This project is using Node.js with Express.js, MongoDB and Typescript for the backend as it makes the development fast and easy. (Even better if you are us VScode).

This project is using React.js, React-Dom and Typescript for the client as a personal choice.

I decided to use **Docker** and **Docker-Compose** to containerize the development project

Github Projects is used for the planning of the project with a Kanban approach.

It is necessary so install the node_modules on each part of the project before using the container for development so the VSCode uses its full integration with Typescript.

So a script was made to make the setup easier.

A template repository was made with this decisions so it was easier to replicate it in the future.

## Requirements to Run

- NPM or YARN
- Docker
- Docker-Composer

## How to run development

Use `./startdevelopent.sh` to run the project on the local server

If you want to close to close the container use `Ctrl + C`

### Dependencies

If you want to add o remove any dependencia follow these steps:

- `$ docker-compose down` in `./`
- Install dependencies inside `./client` or `./backend`
- Use `./startdevelopent.sh` to start developing again

## Building The Projects

## Testing The Projects

## Cleaning containers

Use the command `sudo docker system prune` to clean all images, networks and containers of your system

## Important Information

- Connect to `localhost:8000` to access the backend
- Connect to `localhost:3000` to access the frontend
- Swagger on `localhost:8000/swagger`
- There is no need to create a .env file
