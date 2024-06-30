import { Admin } from "./Admin";

export interface Repository {
  getAll(): Promise<Admin[] | null>;
  delete(userId: number): Promise<string | null>
  createCliente(
    id:number,
    nombre: string,
    password: string,
    email: string
  ): Promise<Admin | null>;
  update(
    userId: number, 
    nombre: string,
    password: string,
    email: string,
    filePath: string | null
  ): Promise<Admin|null>
}
