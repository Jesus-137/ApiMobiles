import { Clientes } from "../domain/Clientes";
import { ClientesRepository } from "../domain/ClientesRepository";

export class GetByIdClienteUseCase {
  constructor(readonly movimientoRepo: ClientesRepository) {}

  async run(id: number): Promise<Clientes | null> {
    try {
      const result = await this.movimientoRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
