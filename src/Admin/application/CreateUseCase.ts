import { Admin } from "../domain/Admin";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    password: string,
    email: string
  ): Promise<Admin | null> {
    try {
      const cliente = await this.movimientoRepo.createCliente(
        id,
        nombre,
        password,
        email
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
