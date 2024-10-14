import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlightInfoComponent } from './my-flight-info.component';

describe('MyFlightInfoComponent', () => {
  let component: MyFlightInfoComponent;
  let fixture: ComponentFixture<MyFlightInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFlightInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
