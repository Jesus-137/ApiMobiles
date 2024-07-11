// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';
import { GetByFechaUseCase } from '../application/GetByFechaUseCase';
import { GetAllUseCase } from '../application/GetAllUseCase';
import { CreateClientesUseCase } from '../application/CreateUseCase';
import { GetAllController } from './controllers/GetAllController';
import { CreateController } from './controllers/CreateController';
import { GetByFechaController } from './controllers/GetByFechaController';

const mysqlClientesRepository = new MysqlClientesRepository()

const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const getAllUseCase = new GetAllUseCase(mysqlClientesRepository);
const getByFechaUseCase = new GetByFechaUseCase(mysqlClientesRepository)
const createClienteController = new CreateController(createClienteUseCase);
const getAllController = new GetAllController(getAllUseCase)
const getByFechaController = new GetByFechaController(getByFechaUseCase)
export {
  createClienteController,
  getAllController,
  getByFechaController
};
