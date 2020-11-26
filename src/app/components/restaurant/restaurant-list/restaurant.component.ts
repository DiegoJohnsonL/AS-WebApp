import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../../models/restaurant.model';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service'
import { RestaurantService } from '../../../services/restaurant.service';
import { UserStorageService } from '../../../services/user-storage.service';
import { OrderStorageService } from '../../../services/order-storage.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurant :  Restaurant;
  public products : Array<Product>;
  public id : number;
  public access: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
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
      this.loadData();
    });
  }

  loadData() {
    this.productService.getAll(this.id)
      .subscribe(data => (this.products = [...data.body.content]));
    this.restaurantService.get(this.id)
      .subscribe(data => (this.restaurant = data.body));
  }

  agregarAlCarrito(product){
    this.orderStorageService.add(product);
  }
}
