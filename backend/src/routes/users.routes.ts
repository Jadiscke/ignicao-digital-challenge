import { Router } from "express";
import usersController from "../controllers/usersController";

const PATH = "/users";

const routes = Router();

routes.post(PATH, usersController.create);
routes.get(PATH, usersController.getAll);
routes.put(PATH + "/:id", usersController.updateOne);
routes.delete(PATH + "/:id", usersController.delete);

export default routes;
