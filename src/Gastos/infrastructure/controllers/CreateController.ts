import { Request, Response } from "express";
import { CreateClientesUseCase } from "../../application/CreateUseCase";
import { format } from 'date-fns';

export class CreateController {
  constructor (
    readonly createClienteUseCase: CreateClientesUseCase,
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const currentDatetime = new Date();
      const date = format(currentDatetime, 'yyyy-MM-dd');
      const fecha = new Date(date)
      const cliente = await this.createClienteUseCase.run(
        data.cantidad,
        data.motivo,
        fecha
      );
      if (cliente){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: cliente.id,
            nombre: cliente.cantidad,
            password: cliente.motivo,
            fecha: cliente.fecha
          },
        });
        console.log('Registro exitoso')
      }
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
