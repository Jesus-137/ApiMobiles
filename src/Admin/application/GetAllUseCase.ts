import { Admin } from "../domain/Admin";
import { Repository } from "../domain/Repository";

export class GetAllClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(): Promise<Admin[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
