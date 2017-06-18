import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {
  private testService: TestServiceService;
  public message = 'Uninitialized';

  constructor (testService: TestServiceService) {
    this.testService = testService;
  }

  ngOnInit () {
    this.message = this.testService.doTestsBitch();
  }

}
