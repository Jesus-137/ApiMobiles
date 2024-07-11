// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';
import { GetAllUseCase } from '../application/GetAllUseCase';
import { CreateClientesUseCase } from '../application/CreateUseCase';
import { UpdateClientesUseCase } from '../application/UpdateUseCase';
import { GetAllController } from './controllers/GetAllController';
import { CreateClienteController } from './controllers/CreateController';
import { UpdateController } from './controllers/UpdateController';

const mysqlClientesRepository = new MysqlClientesRepository()
const getAllUseCase = new GetAllUseCase(mysqlClientesRepository)
const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);
const getAllController = new GetAllController(getAllUseCase)
const createClienteController = new CreateClienteController(createClienteUseCase);
const updateController = new UpdateController(updateUsecase);

export {
  createClienteController,
  updateController,
  getAllController
};
