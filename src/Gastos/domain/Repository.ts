import { Gastos } from "./Gastos";

export interface Repository {
  getAll():Promise<Gastos[]|null>;
  getByDate(tipo: string, tiempo: number):Promise<Gastos[]|null>;
  createCliente(
    cantidad: number,
    motivo: string,
    fecha: Date
  ): Promise<Gastos | null>;
}
