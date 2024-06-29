import { Admin } from "../domain/Admin";
import { Repository } from "../domain/Repository";

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id: number,
    nombre: string
  ): Promise<Admin | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        nombre
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
