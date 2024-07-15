import { Cliente } from "../domain/Cliente";
import { Repository } from "../domain/Repository";

export class LoginUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    email: string,
    password:string,
  ): Promise<Cliente | null> {
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
