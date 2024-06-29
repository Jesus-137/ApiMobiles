import { Request, Response } from "express";

import { GetAllClientesUseCase } from "../../application/GetAllUseCase";

export class GetAllClientesController {
  constructor(readonly getAllProductUseCase: GetAllClientesUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const clientes = await this.getAllProductUseCase.run();
      if (clientes)
        res.status(200).send(clientes.map((cliente: any) => {
            return {
              id: cliente.id,
              nombre: cliente.nombre,
              telefono: cliente.password,
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