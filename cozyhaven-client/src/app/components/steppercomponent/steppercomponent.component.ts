import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { RoomImagesComponent } from "../room-images/room-images.component";
import { AddAmenitiesComponent } from "../add-amenities/add-amenities.component";
import { HotelExtraComponent } from "../hotel-extra/hotel-extra.component";
import { HotelSummaryComponent } from "../hotel-summary/hotel-summary.component";
import { AddRoomComponent } from "../add-room/add-room.component";
import { AddHotelComponent } from "../../views/Hotel-Booking/add-hotel/add-hotel.component";
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";

@Component({
  selector: 'app-steppercomponent',
  standalone: true,
  imports: [StepperModule, ButtonModule, RoomImagesComponent, AddAmenitiesComponent, HotelExtraComponent, HotelSummaryComponent, AddRoomComponent, AddHotelComponent, HotelProviderComponent],
  templateUrl: './steppercomponent.component.html',
  styleUrl: './steppercomponent.component.css'
})
export class SteppercomponentComponent {

}
