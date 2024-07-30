import { Cliente } from "./Cliente";

export interface Repository {
  createCliente(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Cliente | null>;
  getAll():Promise<Cliente[]|null>;
  delete(userId: number): Promise<string | null>;
  update(
    userId: number,
    password: string
  ): Promise<string|null>
  login(
    email: string,
    password: string
  ): Promise<Cliente|null>
}
