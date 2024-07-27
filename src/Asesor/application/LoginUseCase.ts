import { Asesor } from "../domain/Asesor";
import { Repository } from "../domain/Repository";

export class LoginUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    email: string,
    password:string,
  ): Promise<Asesor | null> {
    try {
      const cliente = await this.movimientoRepo.login(
        email,
        password,
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
