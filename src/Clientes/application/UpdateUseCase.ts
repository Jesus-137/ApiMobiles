import { Repository } from "../domain/Repository";

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id: number,
    password: string
  ): Promise<String | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        password
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
