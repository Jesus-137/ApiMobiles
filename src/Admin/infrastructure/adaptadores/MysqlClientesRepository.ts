import { query } from "../../../database/mysql";
import { Admin } from "../../domain/Admin"; 
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async update(userId: number, nombre: string, password: string, email: string): Promise<Admin | null> {
    const sql = "UPDATE admin SET nombre=?, password=?, email=? WHERE id=?";
    const params: any[] = [nombre, password, userId];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return new Admin(userId, nombre, password, email);
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }
  async getAll(): Promise<Admin[] | null> {
    const sql = "SELECT * FROM admin";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Admin(
            cliente.id,
            cliente.nombre,
            cliente.password,
            cliente.email
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM admin where id=?";
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
    password: string,
    email: string
  ): Promise<Admin | null> {
    const sql =
"INSERT INTO admin (nombre, password, email) VALUES (?, ?, ?)";
    const params: any[] = [nombre, password];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Admin(result.insertId, nombre, password, email);
    } catch (error) {
      return null;
    }
  }
}
