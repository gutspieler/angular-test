import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { appModuleRoutes } from './app.router';
import { DogieComponentComponent } from './components/dogie-component/dogie-component.component';
import { IndexComponentComponent } from './components/index-component/index-component.component';
import { KittyComponentComponent } from './components/kitty-component/kitty-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { OrdersComponentComponent } from './components/orders-component/orders-component.component';
import { InjectableTestServiceService } from './services/injectable-test-service.service';
import { OrderServiceMockService } from './services/order-service/order-service-mock.service';
import { OrderServiceProdService } from './services/order-service/order-service-prod.service';
import { OrderServiceService } from './services/order-service/order-service.service';
import { TestServiceService } from './services/test-service.service';

@NgModule({
  declarations: [
    MainComponentComponent,
    DogieComponentComponent,
    KittyComponentComponent,
    IndexComponentComponent,
    OrdersComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appModuleRoutes)
  ],
  providers: [
    TestServiceService,
    InjectableTestServiceService,
    {
      useClass: environment.mock ? OrderServiceMockService : OrderServiceProdService,
      provide: OrderServiceService
    }
  ],
  bootstrap: [
    MainComponentComponent
  ]
})
export class AppModule {
}
