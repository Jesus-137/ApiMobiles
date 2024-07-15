// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';
import { GetByIdClienteUseCase } from '../application/DeleteUseCase';
import { CreateClientesUseCase } from '../application/CreateUseCase';
import { UpdateClientesUseCase } from '../application/UpdateUseCase';
import { LoginUseCase } from '../application/LoginUseCase';
import { GetByIdClienteController } from './controllers/DeleteController';
import { CreateClienteController } from './controllers/CreateController';
import { UpdateController } from './controllers/UpdateController';
import { LoginController } from './controllers/LoginController';

const mysqlClientesRepository = new MysqlClientesRepository
const getByIdUseCase = new GetByIdClienteUseCase(mysqlClientesRepository)
const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);
const loginUseCase = new LoginUseCase(mysqlClientesRepository)
const createClienteController = new CreateClienteController(createClienteUseCase);
const updateController = new UpdateController(updateUsecase);
const getByIdController = new GetByIdClienteController(getByIdUseCase)
const loginController = new LoginController(loginUseCase)
export {
  createClienteController,
  updateController,
  getByIdController,
  loginController
};
