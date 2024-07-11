import { Asesor } from "../domain/Asesor";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Asesor | null> {
    try {
      const cliente = await this.movimientoRepo.createCliente(
        id,
        nombre,
        email,
        password
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
