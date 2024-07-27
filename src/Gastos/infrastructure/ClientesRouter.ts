// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController, getByFechaController } from "./dependencies";
import { getAllController } from "./dependencies";

export const gastosRouter = express.Router();

gastosRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
gastosRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
gastosRouter.get(
  "/getByFecha/:tipo/:tiempo",
  getByFechaController.run.bind(getByFechaController)
)