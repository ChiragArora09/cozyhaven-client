import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedFlightsComponent } from './fetched-flights.component';

describe('FetchedFlightsComponent', () => {
  let component: FetchedFlightsComponent;
  let fixture: ComponentFixture<FetchedFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchedFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
