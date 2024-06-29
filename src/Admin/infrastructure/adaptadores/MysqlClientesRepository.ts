import { query } from "../../../database/mysql";
import { Admin } from "../../domain/Admin";
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  update(userId: number): Promise<Admin | null> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<Admin[] | null> {
    const sql = "SELECT * FROM clientes";
    try {
      const [data]: any = await query(sql, []);
      const admins = Object.values(JSON.parse(JSON.stringify(data)));
      return admins.map(
        (admin: any) =>
          new Admin(
            admin.id,
            admin.nombre,
            admin.password,
            admin.email
          )
      );
    } catch (error) {
      return null;
    }
  }

  async delite(userId: number): Promise<Admin | null> {
    const sql = "Delite clientes WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Admin(
        result[0].id,
        result[0].nombre,
        result[0].password,
        result[0].email
      );
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
"INSERT INTO clientes (nombre,telefono,invitados,fecha,evento, paquete) VALUES (?, ?, ?, ?, ?, ?)";
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
