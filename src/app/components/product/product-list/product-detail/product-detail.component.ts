import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product:Product;

  @Input()
  set entry(product:Product){
    this.product=product;
  }

  @Output() remove:EventEmitter<number> = new EventEmitter<number>();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  delete(){
    if(!confirm('Esta seguro de realizar esta acción'))
      return;

    this.productService.delete(this.product.id)
      .subscribe(()=>{
        this.remove.next(this.product.id);
    })
  }

}
