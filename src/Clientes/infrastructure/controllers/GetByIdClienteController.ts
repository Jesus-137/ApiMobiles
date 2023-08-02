import { Request, Response } from "express";

import { GetByIdClienteUseCase } from "../../application/GetByIdClienteUseCase";

export class GetByIdClienteController {
  constructor(readonly getByIdClienteUseCase: GetByIdClienteUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const cliente = await this.getByIdClienteUseCase.run(id);

      if (cliente)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
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
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
