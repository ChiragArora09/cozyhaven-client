import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomImagesComponent } from './room-images.component';

describe('RoomImagesComponent', () => {
  let component: RoomImagesComponent;
  let fixture: ComponentFixture<RoomImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
