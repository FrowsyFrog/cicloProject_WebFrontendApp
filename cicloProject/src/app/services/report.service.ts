import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Report} from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.baseUrl}/report/findReports`);
  }
  get(id: any): Observable<Report> {
    return this.http.get(`${this.baseUrl}/report/${id}`);
  }
  create(data: Report): Observable<any> {
    return this.http.post(`${this.baseUrl}/report`, data);
  }
}
