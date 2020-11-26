import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model'

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  public product :  Product;
  public id : number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params['id']
        this.loadData(params['id2']);
    });
  }

  loadData(restaurantId) {
    console.log(restaurantId);
    this.productService.get(this.id, restaurantId)
      .subscribe(data => (this.product = data.body.content))
  }
}
