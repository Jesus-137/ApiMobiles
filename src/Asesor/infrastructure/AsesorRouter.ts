// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController, getAllController } from "./dependencies";
import { updateController } from "./dependencies";

export const adminRouter = express.Router();

adminRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
)
adminRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
adminRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
