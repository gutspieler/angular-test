import { Routes } from '@angular/router';
import { DogieComponentComponent } from './components/dogie-component/dogie-component.component';
import { IndexComponentComponent } from './components/index-component/index-component.component';
import { KittyComponentComponent } from './components/kitty-component/kitty-component.component';
import { OrdersComponentComponent } from './components/orders-component/orders-component.component';

export const appModuleRoutes: Routes = [
  {
    path: '',
    component: IndexComponentComponent
  },
  {
    path: 'dogie',
    component: DogieComponentComponent
  },
  {
    path: 'kitty',
    component: KittyComponentComponent
  },
  {
    path: 'orders',
    component: OrdersComponentComponent
  }
];
