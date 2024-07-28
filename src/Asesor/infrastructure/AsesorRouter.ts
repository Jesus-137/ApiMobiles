// src/Clientes/infrastructure/ClientesRouter.ts

import express from "express";
import { createClienteController, getAllController, getByIdController, loginController } from "./dependencies";
import { updateController } from "./dependencies";

export const adminRouter = express.Router();

adminRouter.post(
  "/crear",
  createClienteController.run.bind(createClienteController)
);
adminRouter.put(
  "/update",
  updateController.run.bind(updateController)
);
adminRouter.delete(
  "/delete/:id",
  getByIdController.run.bind(getByIdController)
);
adminRouter.post(
  "/login",
  loginController.run.bind(loginController)
);
adminRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
)