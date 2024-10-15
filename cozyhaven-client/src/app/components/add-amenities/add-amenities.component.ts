import { Component } from '@angular/core';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-amenities',
  standalone: true,
  imports: [HotelProviderComponent,RouterLink,FormsModule],
  templateUrl: './add-amenities.component.html',
  styleUrl: './add-amenities.component.css'
})
export class AddAmenitiesComponent {

  amenities: { [key: string]: string } = {
    breakfast: 'NO',
    breafastLunc: 'NO',
    freeWifi: 'NO',
    gym: 'NO',
    parkingArea: 'NO',
    spa: 'NO',
    swimmingPool: 'NO'
  };

  hotelExtra = {
    cancellationInfo: '',
    complimentary: ''
  };

  roomId: any;
  hotelId:any

  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.roomId = params.get("id");
    });
  }

  onChange(e: any) {
    const amenity = e.target.value;
    const isChecked = e.target.checked;
    this.amenities[amenity] = isChecked ? 'YES' : 'NO'; 
  }

  onClick(event: Event) {
    event.preventDefault(); 
    this.hotelService.addAmenities(this.amenities, this.roomId).subscribe({
      next: (data) => {
        console.log('Amenities added successfully:', data);
      },
      error: (err) => {
        console.error('Error adding amenities:', err);
      }
    });
  }

  onHotelExtraSubmit(event: Event) {
    event.preventDefault();
    this.hotelService.addExtra(this.roomId, this.hotelExtra).subscribe({
      next: (data) => {
        console.log('Hotel extra saved successfully:', data);
      },
      error: (err) => {
        console.error('Error saving hotel extra:', err);
      }
    });
  }

  navigateToAddedRooms(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get("hotelId");
  })
  this.router.navigateByUrl(`/my-addedRoom-card/${this.hotelId}`)
}
}

