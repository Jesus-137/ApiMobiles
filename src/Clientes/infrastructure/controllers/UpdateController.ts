import { Request, Response } from 'express';
import { UpdateClientesUseCase } from '../../application/UpdateUseCase';
import { IStorageRepository } from '../../domain/repositories/IStorageRepository';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); // Usar almacenamiento en memoria para Multer
console.log(upload)

export class UpdateController {
  constructor(
    private readonly updateClientesUseCase: UpdateClientesUseCase,
    private readonly storageRepository: IStorageRepository
  ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    const file = req.file as Express.Multer.File;

    try {
      const filePath = await this.storageRepository.upload(file);

      if (!filePath) {
        return res.status(500).send({
          status: 'error',
          data: 'Error al almacenar el archivo'
        });
      }

      const cliente = await this.updateClientesUseCase.run(
        data.id,
        data.nombre,
        data.password,
        filePath
      );

      if (cliente) {
        return res.status(201).send({
          status: 'success',
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            password: cliente.password,
            filePath: filePath
          }
        });
      } else {
        return res.status(204).send({
          status: 'error',
          data: 'No fue posible actualizar el registro'
        });
      }
    } catch (error) {
      console.error('Error en la actualización:', error);
      return res.status(500).send({
        status: 'error',
        data: 'Ocurrió un error en la actualización',
        msn: error
      });
    }
  }
}
