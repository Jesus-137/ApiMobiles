import { Clientes } from "../domain/Clientes";
import { ClientesRepository } from "../domain/ClientesRepository";

export class CreateClientesUseCase {
  constructor(readonly movimientoRepo: ClientesRepository) {}

  async run(
    nombre: string,
    telefono: string,
    invitados: number,
    fecha: string,
    evento: string,
    paquete: string
  ): Promise<Clientes | null> {
    try {
      const cliente = await this.movimientoRepo.createCliente(
        nombre,
        telefono,
        invitados,
        fecha,
        evento,
        paquete
      );
      return cliente;
    } catch (error) {
      return null;
    }
  }
}
