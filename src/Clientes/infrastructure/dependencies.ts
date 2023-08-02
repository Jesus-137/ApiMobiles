import { MysqlClientesRepository } from "./MysqlClientesRepository";
import { CreateClientesUseCase } from "../application/CreateClienteUseCase";
import { GetAllClientesUseCase } from "../application/GetAllClientesUseCase";
import { GetByIdClienteUseCase } from "../application/GetByIdClienteUseCase";
import { CreateClienteController } from "./controllers/CreateClientesController";
import { GetAllClientesController } from "./controllers/GetAllClientesController";
import { GetByIdClienteController } from "./controllers/GetByIdClienteController";

export const mysqlClientesRepository = new MysqlClientesRepository();
export const createClienteUseCase = new CreateClientesUseCase(
mysqlClientesRepository
);
export const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
export const getByIdClienteUseCase = new GetByIdClienteUseCase(
  mysqlClientesRepository
);
export const createClienteController = new CreateClienteController(
  createClienteUseCase, mysqlClientesRepository
);
export const getAllClientesController = new GetAllClientesController(
  getAllUseCase
);
export const getByIdClienteController = new GetByIdClienteController(
  getByIdClienteUseCase
);