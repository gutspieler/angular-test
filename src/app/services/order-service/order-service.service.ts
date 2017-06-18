import { Injectable } from '@angular/core';
import { IExampleOrderItem } from '../../interfaces/example-order-item';

@Injectable()
export abstract class OrderServiceService {
  public abstract getExampleOrders (): IExampleOrderItem[];
}
