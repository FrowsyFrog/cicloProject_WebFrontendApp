import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Bikelane} from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class BikelaneServiceService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bikelane[]> {
    return this.http.get<Bikelane[]>(`${this.baseUrl}/ciclovia`);
  }
  get(id: any): Observable<Bikelane> {
    return this.http.get(`${this.baseUrl}/bikelane/${id}`);
  }
  create(data: Bikelane): Observable<any> {
    return this.http.post(`${this.baseUrl}/ciclovia`, data);
  }
}
