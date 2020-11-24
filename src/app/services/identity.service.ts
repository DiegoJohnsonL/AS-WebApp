import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient) { }

  signIn(model: Login): Observable<any> {
    return this.http.post(`${environment.apiUrl}login`, model);
  }
}
