import { Injectable } from '@angular/core';
import { SessionUser } from '../models/order.model.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderStorageService {
  private key: string = "ng-orden";
  private hasOrden: boolean;

  constructor() {
    this.hasOrden = this.ordenExist;
    if (this.hasOrden) {}
  }

  get user(): SessionUser {
    let orden = localStorage.getItem(this.key);

    if (orden) {
      let objOrder = JSON.parse(orden);
      return objOrder ;
    }
    return null;
  }

  get ordenExist(): boolean{
    return localStorage.getItem(this.key) !== null;
  }


  set(object): void {
    const orden = JSON.parse(
        localStorage.getItem(
            this.key
        )
    )

    orden.push(object)

    localStorage.setItem(
      this.key,
      JSON.stringify(orden)
    );
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
