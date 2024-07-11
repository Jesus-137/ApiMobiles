import { Asesor } from "./Asesor";

export interface Repository {
  getAll():Promise<Asesor[]|null>
  createCliente(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Asesor | null>;
  delete(userId: number): Promise<string | null>;
  update(
    userId: number,
    password: string|null,
    descripcion: string|null
  ): Promise<string|null>
}
