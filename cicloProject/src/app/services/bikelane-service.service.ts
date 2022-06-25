import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Report, Bikelane, Rating} from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class BikelaneServiceService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ciclovia/page`,{params});
  }

  getList(): Observable<Bikelane[]> {
    return this.http.get<Bikelane[]>(`${this.baseUrl}/ciclovia/list`);
  }

  get(id: any): Observable<Bikelane> {
    return this.http.get(`${this.baseUrl}/ciclovia/${id}`);
  }
  create(data: Bikelane): Observable<any> {
    return this.http.post(`${this.baseUrl}/ciclovia`, data);
  }

  getStars(id: any): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/ciclovia/${id}/calificaciones/promedio`);
  }

  getRating(id: any): Observable<Rating[]>{
    return this.http.get<Rating[]>(`${this.baseUrl}/ciclovia/${id}/calificaciones`);
  }

  getReports(id: any): Observable<Report[]>{
    return this.http.get<Report[]>(`${this.baseUrl}/ciclovia/${id}/reports`);
  }

  createRating(id: any, data: Rating): Observable<any> {
    return this.http.post(`${this.baseUrl}/ciclovia/${id}/calificaciones`, data);
  }

  editRating(id: any, data: Rating): Observable<any> {
    return this.http.put(`${this.baseUrl}/ciclovia/calificaciones/${id}`, data);
  }

  createReport(id: any, data: Report): Observable<any> {
    return this.http.post(`${this.baseUrl}/ciclovia/${id}/reports`, data);
  }

  editReport(id: any, data: Report): Observable<any> {
    return this.http.put(`${this.baseUrl}/report/${id}`, data);
  }
}
