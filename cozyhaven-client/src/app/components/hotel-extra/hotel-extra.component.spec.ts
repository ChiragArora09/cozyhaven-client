import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelExtraComponent } from './hotel-extra.component';

describe('HotelExtraComponent', () => {
  let component: HotelExtraComponent;
  let fixture: ComponentFixture<HotelExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelExtraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
