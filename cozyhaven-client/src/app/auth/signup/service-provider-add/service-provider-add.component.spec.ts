import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderAddComponent } from './service-provider-add.component';

describe('ServiceProviderAddComponent', () => {
  let component: ServiceProviderAddComponent;
  let fixture: ComponentFixture<ServiceProviderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProviderAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceProviderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
