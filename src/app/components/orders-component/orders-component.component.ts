import { Component, OnInit } from '@angular/core';
import { IExampleOrderItem } from '../../interfaces/example-order-item';
import { OrderServiceService } from '../../services/order-service/order-service.service';

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.css']
})
export class OrdersComponentComponent implements OnInit {
  public orderList: IExampleOrderItem[];

  constructor (private exampleOrderService: OrderServiceService) {
  }

  ngOnInit () {
    this.orderList = this.exampleOrderService.getExampleOrders();
  }

}
