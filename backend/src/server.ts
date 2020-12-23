import express, { request, response } from "express";
import routes from "./routes/index.routes";
const server = express();
server.use(express.json());
server.use(routes);

export default server;
