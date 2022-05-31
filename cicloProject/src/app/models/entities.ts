export class Parking {
  ubicacion?: string;
  isFull?: number;
  stars?: number;
  id?: number;
}

export class Bikelane {
  nombreCiclovia?: string;
  idCiclovia?: number;
}

export class Rating {
  id?: number;
  estrellasCalificacion?: number;
  descripcionCalificacion?: string;
  parking?: Parking;
}