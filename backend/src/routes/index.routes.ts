import { Router } from "express";
import echoRoutes from "./echo.routes";
import usersRoutes from "./users.routes";
import swaggerRoutes from "./swagger.routes";

const routes = Router();

routes.use(echoRoutes);
routes.use(usersRoutes);
routes.use(swaggerRoutes);
routes.get("/", (request, response) => {
  return response.json({
    status: "OK",
  });
});

export default routes;
