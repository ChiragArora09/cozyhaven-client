import { Component } from '@angular/core';
import { HotelProviderComponent } from '../hotel-provider/hotel-provider.component';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelProviderComponent, NgFor, RouterLink, NavbarComponent],
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

  deleteHotel(id:number){

  }

}
