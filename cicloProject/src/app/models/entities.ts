export class Parking {
  ubicacion?: string;
  isFull?: number;
  stars?: number;
  id?: number;
}

export class Bikelane {
  nombreCiclovia?: string;
}

export class Ruta {
  ubicacionSalida?: string;
  ubicacionLlegada?: string;
  flagTerminado?: boolean;
  idUser?: number;
  id?: number;
}

export class Usuario {
  username?: string;
  email?: string;
  imageurl?: string;
  password?: string;
  cryptmethod?: string;
  idUser?: number;
}