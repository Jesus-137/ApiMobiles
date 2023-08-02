export class Clientes {
  constructor(
    readonly id: number,
    readonly nombre: string,
    readonly telefono: string,
    readonly invitados: number,
    readonly fecha: string,
    readonly evento: string,
    readonly paquete: string
  ) {}
}
