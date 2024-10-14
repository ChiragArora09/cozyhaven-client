import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataStatusComponent } from './updata-status.component';

describe('UpdataStatusComponent', () => {
  let component: UpdataStatusComponent;
  let fixture: ComponentFixture<UpdataStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdataStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdataStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
