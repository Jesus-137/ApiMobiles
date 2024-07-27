import { query } from "../../../database/mysql";
import { Asesor } from "../../domain/Asesor"; 
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async login(
    email: string,
    password: string
  ): Promise<Asesor | null> {
    const sql = "select * from cliente where email = ? and password = ?;";
    const params: any[] = [email, password];
    try {
      const [result]: any = await query(sql, params);
      if (result.length===0){
        return null
      }
      return new Asesor(result.insertId, result.nombre, email, password, null);
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

  async update(userId: number, password: string|null, descripcion: string|null): Promise<string | null> {
    let sql
    let params: any[]
    if (password!=null){
      sql = "UPDATE asesor SET password=?, descripcion=? WHERE id=?";
      params = [password, descripcion, userId];
    }
    else{
      sql = "UPDATE asesor SET descripcion=? WHERE id=?";
      params = [ descripcion, userId];
    }
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      return 'se actualizaron los datos'
    } catch (error) {
      console.error("Error updating cliente:", error);
      return null;
    }
  }
  async getAll(): Promise<Asesor[] | null> {
    const sql = "SELECT * FROM asesor";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Asesor(
            cliente.id,
            cliente.nombre,
            cliente.password,
            cliente.email,
            cliente.descripcion
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createCliente(
    id:number,
    nombre: string,
    email: string,
    password: string
  ): Promise<Asesor | null> {
    const sql =
"INSERT INTO asesor (nombre, password, email) VALUES (?, ?, ?)";
    const params: any[] = [nombre, password, email];
    console.log(id)
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Asesor(result.insertId, nombre, password, email, null);
    } catch (error) {
      return null;
    }
  }
}
