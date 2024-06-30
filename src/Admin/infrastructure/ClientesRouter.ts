// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController } from "./dependencies";
import { getAllClientesController } from "./dependencies";
import { getByIdClienteController } from "./dependencies";
import { updateController } from "./dependencies";
import { uploadController } from "./dependencies"; // Añadido

export const adminRouter = express.Router();

adminRouter.get(
  "/getAll",
  getAllClientesController.run.bind(getAllClientesController)
);
adminRouter.delete(
  "/:id",
  getByIdClienteController.run.bind(getByIdClienteController)
);
adminRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
adminRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
adminRouter.post(
  "/upload",
  uploadController.run.bind(uploadController) // Añadido
);
