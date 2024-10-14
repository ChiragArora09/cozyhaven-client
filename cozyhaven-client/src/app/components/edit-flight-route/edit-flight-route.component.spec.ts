import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightRouteComponent } from './edit-flight-route.component';

describe('EditFlightRouteComponent', () => {
  let component: EditFlightRouteComponent;
  let fixture: ComponentFixture<EditFlightRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFlightRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFlightRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
