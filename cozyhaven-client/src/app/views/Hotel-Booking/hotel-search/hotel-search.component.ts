import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HotelService } from '../../../service/hotel.service';
import { HotelSearch } from '../../../model/hotelSearch.model';
import { Router, RouterLink } from '@angular/router';
import { HotelDataService } from '../../../service/hotelData.service';

@Component({
  selector: 'app-hotel-search',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent {

  hotels:any[]=[];
  hotelSearchForm:FormGroup
 
  constructor(private hotelService:HotelService,private route:Router,private hotelDataService:HotelDataService){
    this.hotelSearchForm=new FormGroup({
      location:new FormControl('',Validators.required),
      checkInDate:new FormControl('',Validators.required),
      checkOutDate:new FormControl('',Validators.required),
      numberGuests:new FormControl('1',[Validators.required,Validators.min(1)]),
      numRooms:new FormControl('1',[Validators.required,Validators.min(1)])
    })
  }

  onClick(){
    let hotelSearch=new HotelSearch(this.hotelSearchForm.value.location,this.hotelSearchForm.value.checkInDate,this.hotelSearchForm.value.checkOutDate,this.hotelSearchForm.value.numberGuests,this.hotelSearchForm.value.numRooms)
    this.hotelService.getHotels(hotelSearch).subscribe({
      next:(data)=>{
      localStorage.setItem("searchData",JSON.stringify(hotelSearch))
       // this.hotels=data
       this.hotels=this.getUniqueHotels(data);
        console.log(this.hotels)
        this.hotelDataService.setHotels(this.hotels)
        this.route.navigateByUrl('/hotels')
        console.log(this.hotels)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  getUniqueHotels(hotels: any[]): any[] {
    const uniqueHotelMap = new Map<number, any>();
  
    hotels.forEach((hotel) => {
      if (!uniqueHotelMap.has(hotel.hotelId)) {
        uniqueHotelMap.set(hotel.hotelId, hotel);
      }
    });
  
    return Array.from(uniqueHotelMap.values());
}

}
