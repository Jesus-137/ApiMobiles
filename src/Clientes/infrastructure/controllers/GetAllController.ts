import { Request, Response } from "express";

import { GetAllUseCase } from "../../application/GetAllUseCase"; 

export class GetAllController {
  constructor(readonly getAllProductUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const clientes = await this.getAllProductUseCase.run();
      if (clientes)
        res.status(200).send(clientes.map((cliente: any) => {
            return {
              id: cliente.id,
              nombre: cliente.nombre,
              password: cliente.password,
              email: cliente.email
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
