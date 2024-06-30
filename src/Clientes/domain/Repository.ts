import { Users } from "./users";

export interface Repository {
  getAll(): Promise<Users[] | null>;
  delete(userId: number): Promise<string | null>
  createCliente(
    id:number,
    nombre: string,
    password: string
  ): Promise<Users | null>;
  update(
    userId: number, 
    nombre: string,
    password: string
  ): Promise<Users|null>
}
