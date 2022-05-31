export class Parking {
  ubicacion?: string;
  isFull?: number;
  stars?: number;
  id?: number;
}

export class Bikelane {
  nombreCiclovia?: string;
}

export class Rating {
  id?: number;
  stars?: number;
  descripcion?: string;
  idciclovia?: number;
  idparking?: number;
}