import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products:Product[] = [];
  listFilter: string = '';

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  removeDeleteProduct(id:number):void{
    this.products=this.products.filter(x=>x.id!=id);
  }

  getAll(): void {
    let request = this.productService.getAll();

    request.subscribe((data) => {
      this.products = data['body'];
    });
  }

}
