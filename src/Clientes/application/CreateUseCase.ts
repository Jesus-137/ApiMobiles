import { Users } from "../domain/users";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id:number,
    nombre: string,
    password: string,
  ): Promise<Users | null> {
    try {
      const cliente = await this.movimientoRepo.createCliente(
        id,
        nombre,
        password,
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
