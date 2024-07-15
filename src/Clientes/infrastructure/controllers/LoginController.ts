import { Request, Response } from "express";
import { LoginUseCase } from "../../application/LoginUseCase";

export class LoginController {
  constructor (
    readonly loginUseCase: LoginUseCase,
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const cliente = await this.loginUseCase.run(
        data.email,
        data.password
      );
      if (cliente){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            email: cliente.email,
            password: cliente.password
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
