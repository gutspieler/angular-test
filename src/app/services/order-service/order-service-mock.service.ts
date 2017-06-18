import { Injectable } from '@angular/core';
import { IExampleOrderItem } from '../../interfaces/example-order-item';
import { exampleOrderMockList } from '../../sources/example-orderlist';
import { OrderServiceService } from './order-service.service';

@Injectable()
export class OrderServiceMockService implements OrderServiceService {

  public getExampleOrders (): IExampleOrderItem[] {
    return exampleOrderMockList;
  }

}
