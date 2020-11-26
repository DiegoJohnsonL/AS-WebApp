import {OrderLineDTO} from './order-line-dto.model';

export class OrderDTO {
  id: number;
  regDate: string;
  lines: Array<OrderLineDTO>;
  user: any;
}
