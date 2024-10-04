import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFlightBookingComponent } from './confirm-flight-booking.component';

describe('ConfirmFlightBookingComponent', () => {
  let component: ConfirmFlightBookingComponent;
  let fixture: ComponentFixture<ConfirmFlightBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmFlightBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmFlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
