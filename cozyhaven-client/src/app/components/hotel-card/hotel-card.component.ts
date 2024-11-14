import { NgFor, NgIf } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { HotelSearchComponent } from "../../views/Hotel-Booking/hotel-search/hotel-search.component";

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, NavbarComponent, HotelSearchComponent],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent implements OnInit {
// @Input() hotel:any;
// h:any
// hotelId: any;
// searchData:any;
//   constructor(private route:ActivatedRoute,private router:Router){
//   }
//   ngOnInit(): void {
//     const storedData = localStorage.getItem("searchData");
//     this.searchData = storedData ? JSON.parse(storedData) : null;
 
//   }

  // onclick(){
  //   this.route.paramMap.subscribe(params => {
  //     this.hotelId = params.get("id")
  //     console.log(this.hotelId,'check')
  //     return 
  //   })
  
  //   this.router.navigateByUrl(`/room-type/${this.hotelId}`)
  // }

  @Input() hotel: any; // Hotel data passed from parent component
  searchData: {
    location?: string;
    checkInDate?: string;
    checkOutDate?: string;
    numberGuests?: number;
  } = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem("searchData");
    this.searchData = storedData ? JSON.parse(storedData) : {};

    // Log error if hotel data is not provided
    if (!this.hotel) {
      console.error("Hotel data not provided!");
    }
  }

  onclick(){
    if (this.hotel && this.hotel.hotelId) {
      this.router.navigateByUrl(`/room-type/${this.hotel.hotelId}`);
    }
  }
  
}
