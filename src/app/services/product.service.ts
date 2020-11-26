

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

  getAll(restaurantId: number): Observable<Product[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVbmlkZXh0ZXIiLCJpYXQiOjE2MDYzNTkyNDgsImV4cCI6MTYwNjM2Mjg0OH0.nDMOcoeJPxWTZsQOUS_gcBLLMFCL5-m1An5LKVeJcICvJ3xWyRhKyLd4Zmqw1Oi9n7p7eVLkgcBwVc8zqLB31A'
    })

    return this.http.get<Product[]>(`restaurant/${restaurantId}/products`,  { headers: headers });
  }

  get(id: number, restaurantId: number): Observable<Product> {
    return this.http.get<any>(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`);
  }

  getAllByRestaurant(id: number, restaurantId: number): Observable<Product[]> {

    return this.http.get<Product[]>(`restaurant/${restaurantId}/products/${id}`);
  }

  create(model: Product, restaurantId: number): Observable<{}> {
    return this.http.post(`${environment.apiUrl}restaurant/${restaurantId}/products`, model);
  }

  delete(id: number, restaurantId: number): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`);
  }

  update(model: Product, id: number, restaurantId: number): Observable<{}> {
    return this.http.put(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`, model);
  }
}
