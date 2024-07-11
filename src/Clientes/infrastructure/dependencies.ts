// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';
import { GetByIdClienteUseCase } from '../application/DeleteUseCase';
import { CreateClientesUseCase } from '../application/CreateUseCase';
import { UpdateClientesUseCase } from '../application/UpdateUseCase';
import { GetByIdClienteController } from './controllers/DeleteController';
import { CreateClienteController } from './controllers/CreateController';
import { UpdateController } from './controllers/UpdateController';

const mysqlClientesRepository = new MysqlClientesRepository
const getByIdUseCase = new GetByIdClienteUseCase(mysqlClientesRepository)
const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);
const createClienteController = new CreateClienteController(createClienteUseCase);
const updateController = new UpdateController(updateUsecase);
const getByIdController = new GetByIdClienteController(getByIdUseCase)
export {
  createClienteController,
  updateController,
  getByIdController
};
