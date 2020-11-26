import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { UserStorageService } from '../../../services/user-storage.service';
import { OrderStorageService } from '../../../services/order-storage.service';
import { Product } from '../../../models/product.model'

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  public product :  Product;
  public id : number;
  public access: boolean = false;
  public restaurant: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userStorageService: UserStorageService,
    private orderStorageService: OrderStorageService
    ) {  
      if (this.userStorageService.type === "administracion"){
        this.access = true;
      }
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params['id']
        this.restaurant = params['id2'];
        this.loadData(params['id2']);
    });
  }

  loadData(restaurantId) {
    this.productService.get(this.id, restaurantId)
      .subscribe(data => (this.product = data.body));
  }

  borrarCofirmacion(){
    if (true){}
    this.productService.delete(this.id, this.restaurant)
    .subscribe(data => (this.product = data.body));
  }

  agregarAlCarrito(){
    this.orderStorageService.add(this.product);
  }
}
