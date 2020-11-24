import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public product:Product=new Product();
  public loading:boolean=false;

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
   this.loading=true;
   this.productService.create(this.product)
     .subscribe(()=> {
       this.router.navigate(['/products']);
     });
  }
}
