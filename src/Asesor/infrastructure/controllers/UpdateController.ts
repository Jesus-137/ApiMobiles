import { Request, Response } from 'express';
import { UpdateClientesUseCase } from '../../application/UpdateUseCase';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); // Usar almacenamiento en memoria para Multer
console.log(upload)

export class UpdateController {
  constructor(
    private readonly updateClientesUseCase: UpdateClientesUseCase
  ) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      let password;
      let descripcion;
      if (data.password!=''){
        password = data.password
      }else{
        password = null
      }
      if (data.descripcion!=''){
        descripcion=data.descripcion
      }else{
        descripcion=null
      }
      const cliente = await this.updateClientesUseCase.run(
        data.id,
        password,
        descripcion
      );

      if (cliente) {
        return res.status(201).send({
          status: 'success',
          data: cliente
        });
      } else {
        return res.status(204).send({
          status: 'error',
          data: 'No fue posible actualizar el registro'
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        data: 'Ocurrió un error en la actualización',
        msn: error
      });
    }
  }
}
