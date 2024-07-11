import { Gastos } from "../domain/Gastos";
import { Repository } from "../domain/Repository";

export class GetByFechaUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(tipo: string, tiempo: number): Promise<Gastos[] | null> {
    try {
      const result = await this.movimientoRepo.getByDate(tipo, tiempo);
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
