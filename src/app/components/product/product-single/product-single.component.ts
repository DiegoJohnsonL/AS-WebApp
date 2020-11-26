import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { UserStorageService } from '../../../services/user-storage.service';
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userStorageService: UserStorageService
    ) {  
      if (userStorageService.type === "administracion"){
        this.access = true;
      }
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params['id']
        this.loadData(params['id2']);
    });
  }

  loadData(restaurantId) {
    this.productService.get(this.id, restaurantId)
      .subscribe(data => (this.product = data.body));
  }
}
