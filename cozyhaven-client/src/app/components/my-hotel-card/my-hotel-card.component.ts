import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { ViewhotelService } from '../../service/viewhotel.service';
import { NgFor } from '@angular/common';
import { HotelService } from '../../service/hotel.service';

@Component({
  selector: 'app-my-hotel-card',
  standalone: true,
  imports: [RouterLink, HotelProviderComponent,RouterLink,NgFor],
  templateUrl: './my-hotel-card.component.html',
  styleUrl: './my-hotel-card.component.css'
})
export class MyHotelCardComponent {
 
  @Input() hotel: any;
  h: any


  constructor(private router: Router,private hotelService:HotelService){}

  navigateToHotel(id: number){
    this.router.navigateByUrl(`/my-room-card/${id}`)
  }

  onEdit(id:any){
    this.router.navigateByUrl('/edit-hotel/'+id)
  }

  deleteHotel(id:any){
    //  this.hotelService.deleteHotel(id).subscribe({
    //   next:()=>{
        this.hotel=this.hotel.filter(hotel=>hotel.id!==id);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    //  })
  }

}


 

