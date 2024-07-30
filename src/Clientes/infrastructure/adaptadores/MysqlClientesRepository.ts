import { query } from "../../../database/mysql";
import { Cliente } from "../../domain/Cliente"; 
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async login(
    email: string,
    password: string
  ): Promise<Cliente | null> {
    const sql = "select * from cliente where email = ? and password = ?;";
    const params: any[] = [email, password];
    try {
      const [result]: any = await query(sql, params);
      console.log(result[0].id)
      if (result.length===0){
        return null
      }
      return new Cliente(result[0].id, result[0].nombre, email, password );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<string | null> {
    const sql = "DELETE FROM cliente where id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      if(result.affectedRows==0){
        return "Usuario no en contrado"
      };
      return 'Se eliminó correctamente'
    } catch (error) {
      return null;
    }
  }

  async update(userId: number, password: string): Promise<string | null> {
    const sql = "UPDATE cliente SET password=? WHERE id=?";
    const params: any[] = [password, userId];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return 'Se actualizo el usuario'
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }

  async createCliente(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Cliente | null> {
    const sql = "INSERT INTO cliente (nombre, email, password) VALUES (?, ?, ?)";
    const params: any[] = [nombre, email, password];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Cliente(result.insertId, nombre, email, password );
    } catch (error) {
      return null;
    }
  }

  async getAll(): Promise<Cliente[] | null> {
    const sql = "SELECT * FROM asesor";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Cliente(
            cliente.id,
            cliente.nombre,
            cliente.password,
            cliente.email,
          )
      );
    } catch (error) {
      return null;
    }
  }
}
