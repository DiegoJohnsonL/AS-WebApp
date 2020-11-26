import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurantUrl = 'api/restaurants';

  counter = 1;

  constructor(private http: HttpClient) {}
  
  public getRestaurants() {
    return this.http.get<Array<Restaurant>>(`${environment.apiUrl}restaurants`);
  }

  public get(id: number) {
    return this.http.get<Restaurant>(`/${this.restaurantUrl}/${id}`);
  }

  public create(restaurant: Restaurant) {
    this.counter++;
    return this.http.post(this.restaurantUrl, restaurant);
  }

  public delete(id: string) {
    return this.http.delete(`${this.restaurantUrl}/${id}`);
  }
}