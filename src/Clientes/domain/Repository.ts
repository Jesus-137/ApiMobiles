import { Cliente } from "./Cliente";

export interface Repository {
  wwcreateCliente(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Cliente | null>;
  delete(userId: number): Promise<string | null>;
  update(
    userId: number,
    password: string
  ): Promise<string|null>
}
