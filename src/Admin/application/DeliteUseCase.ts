import { Admin } from "../domain/Admin";
import { Repository } from "../domain/Repository";

export class GetByIdClienteUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(id: number): Promise<Admin | null> {
    try {
      const result = await this.movimientoRepo.delite(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
