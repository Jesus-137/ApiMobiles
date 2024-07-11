import { Repository } from "../domain/Repository"; 

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id: number,
    password: string|null,
    descripcion: string|null
  ): Promise<string | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        password,
        descripcion
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
