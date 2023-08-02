import { query } from "../../database/mysql";
import { Clientes } from "../domain/Clientes";
import { ClientesRepository } from "../domain/ClientesRepository";

export class MysqlClientesRepository implements ClientesRepository {
  async getAll(): Promise<Clientes[] | null> {
    const sql = "SELECT * FROM clientes";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Clientes(
            cliente.id,
            cliente.nombre,
            cliente.telefono,
            cliente.invitados,
            cliente.fecha,
            cliente.evento,
            cliente.paquete
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Clientes | null> {
    const sql = "SELECT * FROM clientes WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Clientes(
        result[0].id,
        result[0].nombre,
        result[0].telefono,
        result[0].invitados,
        result[0].fecha,
        result[0].evento,
        result[0].paquete
      );
    } catch (error) {
      return null;
    }
  }

  async createCliente(
    nombre: string,
    telefono: string,
    invitados: number,
    fecha: string,
    evento: string,
    paquete: string
  ): Promise<Clientes | null> {
    const sql =
"INSERT INTO clientes (nombre,telefono,invitados,fecha,evento, paquete) VALUES (?, ?, ?, ?, ?, ?)";
    const params: any[] = [nombre,telefono,invitados,fecha,evento, paquete];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Clientes(result.insertId, nombre, telefono, invitados, fecha, evento, paquete);
    } catch (error) {
      return null;
    }
  }
}
