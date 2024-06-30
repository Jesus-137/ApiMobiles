import { Admin } from "../domain/Admin";
import { Repository } from "../domain/Repository"; 

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id: number,
    nombre: string,
    password: string,
    email: string,
    filePath: string | null
  ): Promise<Admin | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        nombre,
        password,
        email,
        filePath
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
