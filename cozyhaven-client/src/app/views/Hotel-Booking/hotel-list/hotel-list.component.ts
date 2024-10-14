import { Component } from '@angular/core';
import { HotelProviderComponent } from '../hotel-provider/hotel-provider.component';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { MyHotelCardComponent } from "../../../components/my-hotel-card/my-hotel-card.component";
import { HotelService } from '../../../service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelProviderComponent, NgFor, RouterLink, NavbarComponent,MyHotelCardComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {

  hotels:any[]=[];
  

  constructor(private viewhotel:ViewhotelService){
    this.viewhotel.getHotelList().subscribe({
      next:(data)=>{
        this.hotels=data
        console.log(this.hotels)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  getUniqueHotels() {
    const uniqueHotels = [];
    const hotelIds = new Set();

    for (const hotel of this.hotels) {
      if (!hotelIds.has(hotel.hotelId)) {
        hotelIds.add(hotel.hotelId);
        uniqueHotels.push(hotel);
      }
    }
    return uniqueHotels;
  }
  deleteHotel(id:number){

  }

}


