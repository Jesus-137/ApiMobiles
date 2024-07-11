import { Gastos } from "../domain/Gastos";
import { Repository } from "../domain/Repository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    cantidad: number,
    motivo: string,
    fecha: Date
  ): Promise<Gastos | null> {
    try {
      const cliente = await this.movimientoRepo.createCliente(
        cantidad,
        motivo,
        fecha
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
