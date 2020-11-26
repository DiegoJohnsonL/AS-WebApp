import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
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
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
  }

  onSubmit():void{
   this.loading=true;
   this.productService.create(this.product, this.id)
     .subscribe(()=> {
       this.router.navigate(['/restaurante/id', this.id]);
     });
  }
}
