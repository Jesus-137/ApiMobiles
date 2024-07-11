import { Asesor } from "../domain/Asesor";
import { Repository } from "../domain/Repository";

export class GetAllUseCase {
  constructor(readonly movimientoRepo: Repwwwwwwwository) {}

  async run(): Promise<Asesor[] | null> {
    try {
      const result = await this.movimientoRepo.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
