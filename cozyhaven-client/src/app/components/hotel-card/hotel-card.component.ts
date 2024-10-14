import { NgFor, NgIf } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent {
@Input() hotel:any;
h:any
hotelId: any;
  constructor(private route:ActivatedRoute,private router:Router){
  }

  // onclick(){
  //   this.route.paramMap.subscribe(params => {
  //     this.hotelId = params.get("id")
  //     console.log(this.hotelId,'check')
  //     return 
  //   })
  
  //   this.router.navigateByUrl(`/room-type/${this.hotelId}`)
  // }

  onclick(){
    if (this.hotel && this.hotel.hotelId) {
      this.router.navigateByUrl(`/room-type/${this.hotel.hotelId}`);
    }
  }
  
}
