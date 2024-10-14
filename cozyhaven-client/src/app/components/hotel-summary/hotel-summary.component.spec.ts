import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSummaryComponent } from './hotel-summary.component';

describe('HotelSummaryComponent', () => {
  let component: HotelSummaryComponent;
  let fixture: ComponentFixture<HotelSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
