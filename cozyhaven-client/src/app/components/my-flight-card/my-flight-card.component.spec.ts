import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlightCardComponent } from './my-flight-card.component';

describe('MyFlightCardComponent', () => {
  let component: MyFlightCardComponent;
  let fixture: ComponentFixture<MyFlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFlightCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
