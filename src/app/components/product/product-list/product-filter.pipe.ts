import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../../models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], args: string): Product[] {
    let filter:string  = args ? args.toLocaleLowerCase() : null;
    return filter ? value.filter((product:Product)=>
      product.name.toLocaleLowerCase().indexOf(filter) != -1): value;
  }

}
