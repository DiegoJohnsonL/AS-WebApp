import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../models/restaurant.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.apiUrl}restaurants`);
  }
  get(id: number): Observable<Restaurant> {
    return this.http.get<any>(`${environment.apiUrl}restaurants/${id}`);
  }
  create(model: Restaurant): Observable<{}> {
    return this.http.post(`${environment.apiUrl}restaurants`, model);
  }
  delete(id: number): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}restaurants/${id}`);
  }
  update(model: Restaurant, id: number): Observable<{}> {
    return this.http.put(`${environment.apiUrl}restaurants/${id}`, model);
  }
}
