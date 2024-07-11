export class Gastos {
  constructor(
    readonly id: number,
    readonly cantidad: number,
    readonly motivo: string,
    readonly fecha: Date
  ) {}
}
