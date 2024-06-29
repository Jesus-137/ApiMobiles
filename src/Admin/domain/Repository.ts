import { Admin } from "./Admin";

export interface Repository {
  getAll(): Promise<Admin[] | null>;
  delite(userId: number): Promise<Admin | null>
  createCliente(
    id:number,
    nombre: string,
    password: string,
    email: string
  ): Promise<Admin | null>;
  update(userId: number, nombre: string): Promise<Admin | null>
}
