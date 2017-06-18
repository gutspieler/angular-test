import { Injectable } from '@angular/core';
import { IExampleOrderItem } from '../../interfaces/example-order-item';
import { exampleOrderList } from '../../sources/example-orderlist';
import { OrderServiceService } from './order-service.service';

@Injectable()
export class OrderServiceProdService implements OrderServiceService {

  public getExampleOrders (): IExampleOrderItem[] {
    return exampleOrderList;
  }
}
