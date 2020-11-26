

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../models/product.model';
import {environment} from '../../environments/environment';
import { UserStorageService } from './user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }

  getAll(restaurantId: number): Observable<Product[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.get<Product[]>(`${environment.apiUrl}restaurants/${restaurantId}/products`,  
      { headers: headers });
  }

  get(id: number, restaurantId: number): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.get<any>(`${environment.apiUrl}restaurants/${restaurantId}/products/${id}`,  
    { headers: headers });
  }

  getAllByRestaurant(id: number, restaurantId: number): Observable<Product[]> {

    return this.http.get<Product[]>(`restaurant/${restaurantId}/products/${id}`);
  }

  create(model: Product, restaurantId: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.post(`${environment.apiUrl}restaurants/${restaurantId}/products`, model, { headers: headers });
  }

  delete(id: number, restaurantId: number): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`);
  }

  update(model: Product, id: number, restaurantId: number): Observable<{}> {
    return this.http.put(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`, model);
  }
}
