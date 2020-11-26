import { Injectable } from '@angular/core';

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

  get order(): any {
    let orden = localStorage.getItem(this.key);

    if (orden) {
      let objOrder = JSON.parse(orden);
      return objOrder ;
    }
    return [];
  }

  get ordenExist(): boolean{
    return localStorage.getItem(this.key) !== null;
  }

  add(object): void {
    const orden = JSON.parse(
        localStorage.getItem(
            this.key
        )
    ) ? JSON.parse(localStorage.getItem(this.key)): [];
    
    const index = orden.findIndex(e => e.id === object.id);

    console.log(object, orden[index], index)
    if (index === -1){
      object.ammount =  1;
      orden.push(object);
    } else {
      orden[index].ammount = orden[index].ammount + 1;
    }
    console.log(orden)
    localStorage.setItem(
      this.key,
      JSON.stringify(orden)
    );
  }

  destroy(): void {
    localStorage.setItem(
      this.key,
      JSON.stringify([])
    );;
  }
}