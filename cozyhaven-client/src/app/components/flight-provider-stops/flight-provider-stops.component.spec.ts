import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightProviderStopsComponent } from './flight-provider-stops.component';

describe('FlightProviderStopsComponent', () => {
  let component: FlightProviderStopsComponent;
  let fixture: ComponentFixture<FlightProviderStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightProviderStopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightProviderStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
