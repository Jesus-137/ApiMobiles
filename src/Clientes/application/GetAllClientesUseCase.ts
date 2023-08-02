import { Clientes } from "../domain/Clientes";
import { ClientesRepository } from "../domain/ClientesRepository";

export class GetAllClientesUseCase {
  constructor(readonly movimientoRepo: ClientesRepository) {}

  async run(): Promise<Clientes[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
