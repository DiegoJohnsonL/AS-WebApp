import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product = new Product();
  public loading: boolean = false;

  constructor(
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading=true;
    this.productService.get(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.product=data['body'];
        this.loading=false;
      });
  }

  onSubmit(): void {
    this.loading = true;
    console.log(this.product);
    this.productService.update(this.product)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }
}
