import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightProviderFlightsComponent } from './flight-provider-flights.component';

describe('FlightProviderFlightsComponent', () => {
  let component: FlightProviderFlightsComponent;
  let fixture: ComponentFixture<FlightProviderFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightProviderFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightProviderFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
