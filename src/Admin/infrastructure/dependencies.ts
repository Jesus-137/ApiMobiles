import { MysqlClientesRepository } from "./adaptadores/MysqlClientesRepository";
import { MongoDBClientesRepository } from "./adaptadores/MongoDBClientesRepository";
import { CreateClientesUseCase } from "../application/CreateUseCase";
import { GetAllClientesUseCase } from "../application/GetAllUseCase";
import { GetByIdClienteUseCase } from "../application/DeliteUseCase";
import { CreateClienteController } from "./controllers/CreateController";
import { GetAllClientesController } from "./controllers/GetAllController";
import { GetByIdClienteController } from "./controllers/DeliteController";

export const mysqlClientesRepository = new MysqlClientesRepository();
export const mongoDBRepo = new MongoDBClientesRepository
export const createClienteUseCaseM = new CreateClientesUseCase(
  mongoDBRepo
);
export const getAllUseCaseM = new GetAllClientesUseCase(mongoDBRepo);
export const getByIdClienteUseCaseM = new GetByIdClienteUseCase(
  mongoDBRepo
);
export const createClienteUseCase = new CreateClientesUseCase(
  mysqlClientesRepository
);
export const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
export const getByIdClienteUseCase = new GetByIdClienteUseCase(
  mysqlClientesRepository
);
export const createClienteController = new CreateClienteController(
  createClienteUseCase
);
export const getAllClientesController = new GetAllClientesController(
  getAllUseCase
);
export const getByIdClienteController = new GetByIdClienteController(
  getByIdClienteUseCase
);
export const createClienteControllerM = new CreateClienteController(
  createClienteUseCaseM
);
export const getAllClientesControllerM = new GetAllClientesController(
  getAllUseCaseM
);
export const getByIdClienteControllerM = new GetByIdClienteController(
  getByIdClienteUseCaseM
);