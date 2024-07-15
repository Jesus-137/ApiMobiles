// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController, getByIdController, loginController } from "./dependencies";
import { updateController } from "./dependencies";

export const clienteRouter = express.Router();

clienteRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
clienteRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
clienteRouter.delete(
  "/delete/:id",
  getByIdController.run.bind(getByIdController)
);
clienteRouter.post(
  "/login",
  loginController.run.bind(loginController)
);