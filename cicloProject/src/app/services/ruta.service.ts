import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ruta } from '../models/entities';
import { RutaxCiclovia } from './../models/entities';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.baseUrl}/ruta/compararRutas`);
  }
  getCicloviasByRuta(id: any): Observable<RutaxCiclovia[]> {
    return this.http.get<RutaxCiclovia[]>(`${this.baseUrl}/rutaxciclovia/tiemposPorCiclovia/${id}`);
  }
  create(data: Ruta): Observable<any> {
    return this.http.post(`${this.baseUrl}/ruta`, data);
  }
}
