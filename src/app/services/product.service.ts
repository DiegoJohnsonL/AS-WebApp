
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {environment} from '../../environments/environment';
import { UserStorageService } from './user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }

  getAll(restaurantId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.get<any>(`${environment.apiUrl}restaurants/${restaurantId}/products`,  
      { headers: headers });
  }

  get(id: number, restaurantId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.get<any>(`${environment.apiUrl}restaurants/${restaurantId}/products/${id}`,  
    { headers: headers });
  }

  getAllByRestaurant(id: number, restaurantId: number): Observable<any> {

    return this.http.get<any>(`restaurant/${restaurantId}/products/${id}`);
  }

  create(model: Product, restaurantId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });

    return this.http.post(`${environment.apiUrl}restaurants/${restaurantId}/products`, model, { headers: headers });
  }

  delete(id: number, restaurantId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}restaurants/${restaurantId}/products/${id}`);
  }

  update(model: Product, id: number, restaurantId: number): Observable<{}> {
    return this.http.put(`${environment.apiUrl}restaurant/${restaurantId}/products/${id}`, model);
  }
}