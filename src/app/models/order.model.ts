import {OrderLine} from './order-line.model';

export class Order {
  id: number;
  regDate: string;
  lines: Array<OrderLine>;
  total: number;
  user: any;
}
