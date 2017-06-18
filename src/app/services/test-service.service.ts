import { Injectable } from '@angular/core';
import { InjectableTestServiceService } from './injectable-test-service.service';

@Injectable()
export class TestServiceService {

  constructor (private injectableService: InjectableTestServiceService) {
  }

  doTestsBitch () {
    return this.injectableService.getMessage();
  }

}
