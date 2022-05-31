import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ruta } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.baseUrl}/ruta/compararRutas`);
  }
  getRutasByUser(id: any): Observable<Ruta> {
    return this.http.get(`${this.baseUrl}/ruta/encontrarRutasByUsuario/${id}`);
  }
  create(data: Ruta): Observable<any> {
    return this.http.post(`${this.baseUrl}/ruta`, data);
  }
}
