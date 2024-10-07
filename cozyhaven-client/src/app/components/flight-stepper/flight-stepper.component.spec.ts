import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStepperComponent } from './flight-stepper.component';

describe('FlightStepperComponent', () => {
  let component: FlightStepperComponent;
  let fixture: ComponentFixture<FlightStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
