import {Order} from './order.model';

export class OrderLine {
  id: number;
  order: Order;
  product: any;
  price: any;
  quantity: number;
  total: number;
}
