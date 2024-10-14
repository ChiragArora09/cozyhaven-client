import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddedRoomCardComponent } from './my-added-room-card.component';

describe('MyAddedRoomCardComponent', () => {
  let component: MyAddedRoomCardComponent;
  let fixture: ComponentFixture<MyAddedRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAddedRoomCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAddedRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
