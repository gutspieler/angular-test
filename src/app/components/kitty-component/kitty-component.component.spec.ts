import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyComponentComponent } from './kitty-component.component';

describe('KittyComponentComponent', () => {
  let component: KittyComponentComponent;
  let fixture: ComponentFixture<KittyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KittyComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
