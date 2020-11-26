import { Component, OnInit } from '@angular/core';
import { OrderStorageService } from '../../../services/order-storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders;

  constructor(
      private orderStorageService: OrderStorageService
    ) { }

  ngOnInit(): void {
    this.orders = this.orderStorageService.order;
  }

}
