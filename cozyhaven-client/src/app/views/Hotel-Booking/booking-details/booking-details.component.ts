import { Component, OnInit } from '@angular/core';
import { BookedService } from '../../../service/booked.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
 bookings:any[]=[];
 bookingId:any;

 constructor(private bookedService:BookedService,private route:ActivatedRoute){}

   ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
       this.bookingId = params.get("bookingId");
     });

    // this.fetchBooking();
   }

  // cancelBooking(){
  //    this.bookedService.cancelBooking(this.bookingId).subscribe({
  //     next:(data)=>{
  //       this.bookings=data;
  //     }
  //    })
  //  }

  //  fetchBooking(){
  //    this.bookedService.getBookingDetails(this.bookingId).subscribe({
  //      next:(data)=>{
  //        this.bookings=data;
  //        console.log(this.bookings)
  //     }
  //  })
  // }
}

