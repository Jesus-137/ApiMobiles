import express from "express";

import { createClienteController, createClienteControllerM } from "./dependencies";
import { getAllClientesController, getAllClientesControllerM } from "./dependencies";
import { getByIdClienteController, getByIdClienteControllerM } from "./dependencies";

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
clienteRouter.get(
  "/mongo/getAll",
  getAllClientesControllerM.run.bind(getAllClientesControllerM)
);
clienteRouter.delete(
  "/mongo/:id",
  getByIdClienteControllerM.run.bind(getByIdClienteControllerM)
);
clienteRouter.post(
  "/mongo/crear",
  createClienteControllerM.run.bind(createClienteControllerM)
);
