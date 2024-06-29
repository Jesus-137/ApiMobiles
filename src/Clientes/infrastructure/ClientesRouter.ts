// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { getByIdClienteController } from "./dependencies";
import { updateController } from "./dependencies";
import { uploadController } from "./dependencies"; // Añadido

export const clienteRouter = express.Router();

clienteRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
clienteRouter.delete(
  "/:id",
  getByIdClienteController.run.bind(getByIdClienteController)
);
clienteRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
clienteRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
clienteRouter.post(
  "/upload",
  uploadController.run.bind(uploadController) // Añadido
);
