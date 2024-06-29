import { Users } from "../domain/users";
import { Repository } from "../domain/Repository";

export class GetAllClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(): Promise<Users[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
