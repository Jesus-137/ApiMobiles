import express from "express";

import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { getByIdClienteController } from "./dependencies";

export const clienteRouter = express.Router();

clienteRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
clienteRouter.get(
  "/:id",
  getByIdClienteController.run.bind(getByIdClienteController)
);
clienteRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);