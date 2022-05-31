import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/entities'
import { Ruta } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/user/findUsers`);
  }
  getUserById(id: any): Observable<Usuario> {
    return this.http.get(`${this.baseUrl}/user/findUserById/${id}`);
  }
  getUserByLogIn(email: any, password: any): Observable<Usuario> {
    return this.http.get(`${this.baseUrl}/user/findUserByLogIn/?email=${email}&password=${password}`)
  }
  getRutasByUser(id: any): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.baseUrl}/ruta/encontrarRutasByUsuario/${id}`);
  }
  create(data: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, data);
  }
}
