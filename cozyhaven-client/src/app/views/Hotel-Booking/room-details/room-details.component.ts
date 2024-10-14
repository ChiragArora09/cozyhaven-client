import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [NgFor,NgIf,RatingModule,FormsModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit{
  

  reviews:any[]=[];
  roomInfo:any;
  picture:any[]=[];
  roomId:any;
  hotelId:any;
  hotelBookingData:any;

  constructor(private hotelService:HotelService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get("hotelId")
      this.roomId = params.get("roomId")
      
      })

    this.hotelService.getReviews(this.hotelId).subscribe({
      next:(data)=>{
        this.reviews=data;
       console.log(data);
      }
    })

    this.hotelService.getRoomInfo(this.roomId).subscribe({
      next:(data)=>{
        this.roomInfo=data[0];
        console.log(data)
      }
    })

    this.hotelService.getRoomPictures(this.roomId).subscribe({
      next:(data)=>{
        this.picture=data;
        console.log(data);
      }
    })
    
    
  }

  confirmBooking(){
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get("roomId")
      
      })
      
    this.hotelBookingData = JSON.parse(localStorage.getItem("searchData"));
   console.log(this.hotelBookingData);
  const searchData={ 
    checkInDate: this.hotelBookingData.checkInDate,
    checkOutDate:this.hotelBookingData.checkOutDate,
    numGuests: this.hotelBookingData.numberGuests,
    numberOfRooms:this.hotelBookingData.numRooms
  }
  console.log(searchData)
    this.hotelService.confirmBooking(searchData,this.roomId).subscribe({
      next:(data)=>{
        console.log(data);
        window.alert('Booking Confirmed! Thank you for booking with us.');
      }
    })

   
  }

}

// {
//   "checkInDate": "2024-10-07",
//   "checkOutDate": "2024-10-08",
//   "numGuests": 4,
//   "numberOfRooms": 1
// }

// {"location":"Goa","checkInDate":"2024-10-14","checkOutDate":"2024-10-15","numberGuests":"1","numRooms":"1"}