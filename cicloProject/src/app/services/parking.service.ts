import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Parking} from '../models/entities';

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
}
