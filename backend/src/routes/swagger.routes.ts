import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger/swagger.json";
const PATH = "/swagger";

const routes = Router();

routes.use(PATH, swaggerUi.serve);
routes.get(PATH, swaggerUi.setup(swaggerDocument));

export default routes;
