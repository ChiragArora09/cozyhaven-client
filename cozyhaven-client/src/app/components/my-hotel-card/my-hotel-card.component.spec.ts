import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotelCardComponent } from './my-hotel-card.component';

describe('MyHotelCardComponent', () => {
  let component: MyHotelCardComponent;
  let fixture: ComponentFixture<MyHotelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHotelCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
