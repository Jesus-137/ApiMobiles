import { Cliente } from "../domain/Cliente";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(): Promise<Cliente[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
