import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightProviderSidebarComponent } from './flight-provider-sidebar.component';

describe('FlightProviderSidebarComponent', () => {
  let component: FlightProviderSidebarComponent;
  let fixture: ComponentFixture<FlightProviderSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightProviderSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightProviderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
