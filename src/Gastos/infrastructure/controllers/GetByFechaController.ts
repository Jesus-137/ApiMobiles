import { Request, Response } from "express";

import { GetByFechaUseCase } from "../../application/GetByFechaUseCase";

export class GetByFechaController {
  constructor(readonly getAllProductUseCase: GetByFechaUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.params
    try {
      const clientes = await this.getAllProductUseCase.run(
        data.tipo,
        parseInt(data.tiempo)
      );
      if (clientes)
        res.status(200).send(clientes.map((cliente: any) => {
            return {
              id: cliente.id,
              cantidad: cliente.cantidad,
              motivo: cliente.motivo,
              fecha: cliente.fecha
            };
          }),
        );
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
