# Ignicao Digital Challenge

This is a challenge for [Ignicao digital](https://www.ignicaodigital.com.br/).
The objective of the project is to make a simple API and a Simple Client to consume the API.

## Explaining the Decisions

This project is using Node.js with Express.js, MongoDB and Typescript for the backend as it makes the development fast and easy. (Even better if you are us VScode).

This project is using React.js and Typescript for the client as a personal choice.

For fastening the Ui development it was decided to use [Material-Ui](https://material-ui.com/) as it is a complet library for Ui development.

I decided to use **Docker** and **Docker-Compose** to containerize the development project

Github Projects is used for the planning of the project with a Kanban approach.

It is necessary to install the node_modules on each part of the project before using the container for development so the VSCode uses its full integration with Typescript.

A script was made to make the setup easier.

A template repository was made with this decisions so it was easier to replicate it in the future.

At the moment there is no decisions made for deploying or testing the project.

## Requirements to Run

- **NPM** or **YARN**
- Docker
- Docker-Composer
- Bash or Shell

## How to run the project for development

Use `./startdevelopent.sh` to run the project on the local server if you are using **YARN**

Use `./startdevelopmentNPM.sh` instead if you are using **NPM**
If you want to close to close the container use `Ctrl + C`

### Dependencies

If you want to add o remove any dependencia follow these steps:

- `$ docker-compose down` in `./`
- Install dependencies inside `./client` or `./backend`
- Use `./startdevelopment.sh` to start developing again

## Building The Projects

There are no scripts for building the project at the moment due to lack of time.

## Testing The Projects

There are no Tests for backend or the client in due to lack of time.

## Cleaning containers

Use the command `sudo docker system prune` to clean all images, networks and containers of your system

## Important Information

- Connect to `localhost:8000` to access the backend
- Connect to `localhost:3000` to access the frontend
- Swagger on `localhost:8000/swagger`
- There is no need to create a .env file
- All the environments variables are present on the `docker-compose.yml` archive
