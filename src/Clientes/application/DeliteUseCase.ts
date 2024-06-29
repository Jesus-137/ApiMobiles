import { Repository } from "../domain/Repository";

export class GetByIdClienteUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(id: number): Promise<string | null> {
    try {
      const result = await this.movimientoRepo.delete(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
