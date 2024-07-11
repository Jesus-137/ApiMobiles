import { query } from "../../../database/mysql";
import { Gastos } from "../../domain/Gastos"; 
import { Repository } from "../../domain/Repository";

export class MysqlClientesRepository implements Repository {
  async getAll(): Promise<Gastos[] | null> {
    const sql = "SELECT * FROM gastos";
    try {
      const [data]: any = await query(sql, []);
      const clientes = Object.values(JSON.parse(JSON.stringify(data)));
      return clientes.map(
        (cliente: any) =>
          new Gastos(
            cliente.id,
            cliente.cantidad,
            cliente.motivo,
            cliente.date
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getByDate(tipo: string, tiempo: number):Promise<Gastos[]|null>{
    let sql;
    let params: any[];
    if (tipo == 'dia'){
      sql='SELECT * FROM gastos WHERE date BETWEEN CURDATE() - INTERVAL ? DAY AND CURDATE() - INTERVAL ? DAY;'
      params =[tiempo, tiempo]
    }else if (tipo == 'semana'){
      sql = 'SELECT * FROM gastos WHERE YEAR(date) = YEAR(CURDATE()) AND MONTH(date) = MONTH(CURDATE()) AND WEEK(date, 1) = WEEK(DATE_ADD(DATE_SUB(CURDATE(), INTERVAL DAY(CURDATE())-1 DAY), INTERVAL ? WEEK), 1);;'
      params=[tiempo-1]
    }else if (tipo == 'mes'){
      sql = 'SELECT * FROM gastos WHERE YEAR(date) = YEAR(CURDATE() - INTERVAL ? MONTH) AND MONTH(date) = MONTH(CURDATE() - INTERVAL ? MONTH);'
      params =[tiempo-1, tiempo-1]
    }else{
      return null
    }
    try {
      const [data]: any = await query(sql, params);
      const gastos = Object.values(JSON.parse(JSON.stringify(data)))
      return gastos.map(
        (gasto: any)=>
          new Gastos(
            gasto.id,
            gasto.cantidad,
            gasto.motivo,
            gasto.date
          )
      )
    } catch (error) {
      return null
    }
  }

  async createCliente(
    cantidad: number,
    motivo: string,
    fecha: Date
  ): Promise<Gastos | null> {
    const sql =
"INSERT INTO gastos (cantidad, motivo, date) VALUES (?, ?, ?)";
    const params: any[] = [cantidad, motivo, fecha];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Gastos(result.insertId, cantidad, motivo, fecha);
    } catch (error) {
      return null;
    }
  }
}
