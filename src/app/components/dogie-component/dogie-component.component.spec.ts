import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogieComponentComponent } from './dogie-component.component';

describe('DogieComponentComponent', () => {
  let component: DogieComponentComponent;
  let fixture: ComponentFixture<DogieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogieComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
