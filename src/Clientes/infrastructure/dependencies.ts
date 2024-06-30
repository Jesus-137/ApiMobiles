// src/Clientes/infrastructure/dependencies.ts

import { MysqlClientesRepository } from './adaptadores/MysqlClientesRepository';
import { S3StorageRepository } from './adaptadores/S3Repo'; 
import { EC2StorageAdapter } from './adaptadores/EC2Repo';

import { CreateClientesUseCase } from '../application/CreateUseCase'; 
import { GetAllClientesUseCase } from '../application/GetAllUseCase'; 
import { GetByIdClienteUseCase } from '../application/DeliteUseCase'; 
import { UpdateClientesUseCase } from '../application/UpdateUseCase';

import { CreateClienteController } from './controllers/CreateController';
import { GetAllClientesController } from './controllers/GetAllController';
import { GetByIdClienteController } from './controllers/DeliteController';
import { UpdateController } from './controllers/UpdateController';
import { UploadController } from './controllers/UploadController';

const mysqlClientesRepository = new MysqlClientesRepository();

const createClienteUseCase = new CreateClientesUseCase(mysqlClientesRepository);
const getAllUseCase = new GetAllClientesUseCase(mysqlClientesRepository);
const getByIdClienteUseCase = new GetByIdClienteUseCase(mysqlClientesRepository);
const updateUsecase = new UpdateClientesUseCase(mysqlClientesRepository);

const storageRepository = process.env.STORAGE_ADAPTER === 's3'
  ? new S3StorageRepository()
  : new EC2StorageAdapter();

const createClienteController = new CreateClienteController(createClienteUseCase);
const getAllClientesController = new GetAllClientesController(getAllUseCase);
const getByIdClienteController = new GetByIdClienteController(getByIdClienteUseCase);
const updateController = new UpdateController(updateUsecase);
const uploadController = new UploadController(storageRepository); // Añadido

export {
  createClienteController,
  getAllClientesController,
  getByIdClienteController,
  updateController,
  uploadController // Añadido
};
