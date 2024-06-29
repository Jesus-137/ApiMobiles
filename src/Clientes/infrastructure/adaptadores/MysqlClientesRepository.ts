import { query } from "../../../database/mysql";
import { Users } from "../../domain/users";
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async update(userId: number, nombre: string, password: string): Promise<Users | null> {
    const sql = "UPDATE clientes SET nombre=?, password=? WHERE id=?";
    const params: any[] = [nombre, password, userId];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return new Users(userId, nombre, password);
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }
  async getAll(): Promise<Users[] | null> {
    const sql = "SELECT * FROM clientes";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Users(
            cliente.id,
            cliente.nombre,
            cliente.password
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM clientes where id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);
      return 'Se eliminó correctamente'
    } catch (error) {
      return null;
    }
  }

  async createCliente(
    id:number,
    nombre: string,
    password: string
  ): Promise<Users | null> {
    const sql =
"INSERT INTO clientes (nombre, password) VALUES (?, ?)";
    const params: any[] = [nombre, password];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Users(result.insertId, nombre, password);
    } catch (error) {
      return null;
    }
  }
}
