import { Request, Response } from "express";
import { CreateClientesUseCase } from "../../application/CreateClienteUseCase";
import { MysqlClientesRepository } from "../MysqlClientesRepository";

export class CreateClienteController {
  constructor (
    readonly createClienteUseCase: CreateClientesUseCase,
    readonly mysqlRepo: MysqlClientesRepository
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const cliente = await this.createClienteUseCase.run(
        data.nombre,
        data.telefono,
        data.invitados,
        data.fecha,
        data.evento,
        data.paquete
      );
      if (cliente){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            telefono: cliente.telefono,
            invitados: cliente.invitados,
            fecha: cliente.fecha,
            evento: cliente.evento,
            paquete: cliente.paquete
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
