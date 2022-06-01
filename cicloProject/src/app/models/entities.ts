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

export class Report {
  description?: string;
  idUser?: number;
}

export class Ruta {
  ubicacionSalida?: string;
  ubicacionLlegada?: string;
  flagTerminado?: boolean;
  idUser?: number;
  idRuta?: number;
}

export class FindRutas {
  ubicacionSalida?: string;
  ubicacionLlegada?: string;
}

export class Usuario {
  username?: string;
  email?: string;
  imageurl?: string;
  password?: string;
  cryptmethod?: string;
  idUser?: number;
}