import { Clientes } from "./Clientes";

export interface ClientesRepository {
  getAll(): Promise<Clientes[] | null>;
  getById(userId: number): Promise<Clientes | null>
  createCliente(
    nombre: string,
    telefono: string,
    invitados: number,
    fecha: string,
    evento: string,
    paquete: string
  ): Promise<Clientes | null>;
}
