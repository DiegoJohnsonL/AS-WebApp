

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../models/product.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}products`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<any>(`${environment.apiUrl}products/${id}`);
  }

  create(model: Product): Observable<{}> {
    return this.http.post(`${environment.apiUrl}products`, model);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}products/${id}`);
  }

  update(model: Product): Observable<{}> {
    return this.http.put(`${environment.apiUrl}products`, model);
  }
}
