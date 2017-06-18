import { Injectable } from '@angular/core';

@Injectable()
export class InjectableTestServiceService {

  getMessage() {
    return 'Ez a szöveg már az injektált class ból való';
  }

}
