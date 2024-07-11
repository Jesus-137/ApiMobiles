export class Asesor {
  constructor(
    readonly id: number,
    readonly nombre: string,
    readonly password: string,
    readonly email: string,
    readonly descripcion: string|null,
  ) {}
}
