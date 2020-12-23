import { Router } from "express";

const PATH = "/echo";

const routes = Router();

routes.get(PATH, (request, response) => {
  response.json({ description: `${PATH} ROUTE` });
});

routes.post("/echo", (request, response) => {
  return response.json(request.body);
});

export default routes;
