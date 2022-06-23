import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Ruta} from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class FindrutasserviceService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getRutasXPuntos(Salida: any,Llegada: any): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.baseUrl}/ruta/distintasRutas/${Salida}/${Llegada}`);
  }
}
