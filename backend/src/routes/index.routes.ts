import { Router } from "express";
import echoRoutes from "./echo.routes";
import toolsRoutes from "./tools.routes";
import swaggerRoutes from "./swagger.routes";

const routes = Router();

routes.use(echoRoutes);
routes.use(toolsRoutes);
routes.use(swaggerRoutes);
routes.get("/", (request, response) => {
  return response.json({
    status: "OK",
  });
});

export default routes;
