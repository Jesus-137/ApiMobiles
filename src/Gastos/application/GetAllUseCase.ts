import { Gastos } from "../domain/Gastos";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(): Promise<Gastos[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
