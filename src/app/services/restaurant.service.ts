import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Restaurant } from '../models/restaurant.model';
import { UserStorageService } from './user-storage.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurantUrl = `${environment.apiUrl}restaurants`;
  counter = 1;

  constructor(private http: HttpClient, private userStorageService: UserStorageService) {
  }
  
  public getRestaurants() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });
    return this.http.get<Array<Restaurant>>(this.restaurantUrl,  {headers: headers});
  }

  public get(id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userStorageService.token}` });
    return this.http.get<Restaurant>(`${this.restaurantUrl}/${id}`, {headers: headers});
  }

  public create(restaurant: Restaurant) {
    this.counter++;
    console.log("POST", restaurant)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userStorageService.token}` });
    return this.http.post(this.restaurantUrl, restaurant, {headers: headers});
  }

  public delete(id: string) {
    return this.http.delete(`${this.restaurantUrl}/${id}`);
  }
}