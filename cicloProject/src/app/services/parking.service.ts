import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Parking, Rating} from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Parking[]> {
    return this.http.get<Parking[]>(`${this.baseUrl}/parking/list`);
  }
  get(id: any): Observable<Parking> {
    return this.http.get(`${this.baseUrl}/parking/${id}`);
  }
  create(data: Parking): Observable<any> {
    return this.http.post(`${this.baseUrl}/parking`, data);
  }
  getRating(id: any): Observable<Rating[]>{
    return this.http.get<Rating[]>(`${this.baseUrl}/parking/calificaciones/${id}`);
  }

  createRating(id: any, data: Rating): Observable<any> {
    return this.http.post(`${this.baseUrl}/parking/${id}/calificaciones`, data);
  }

  updateDis(id: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/parking/full/${id}`, null);
  }
  updateStars(id: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/parking/rating/${id}`, null);
  }

  getParkingxStars(stars: any): Observable<Parking[]>{
    return this.http.get<Parking[]>(`${this.baseUrl}/parking/stars/${stars}`);
  }
  getParkingsDisp(): Observable<Parking[]> {
    return this.http.get<Parking[]>(`${this.baseUrl}/parking/disponible`);
  }
}
