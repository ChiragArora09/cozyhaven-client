import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerBookingService } from '../../service/customerBookings.service';
import { RatingModule } from 'primeng/rating';
import { BookedService } from '../../service/booked.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-history',
  standalone: true,
  imports: [NavbarComponent, NgClass, NgFor, FormsModule, NgIf, RatingModule],
  templateUrl: './customer-history.component.html',
  styleUrl: './customer-history.component.css'
})
export class CustomerHistoryComponent {
  selectedService = 'Flight';
  filter = 'Upcoming';
  bookings: any = []
  showFeedback: boolean = false
  value: number = 0
  description: string
  bookingId: any
  showFeedbackMessage: boolean = false
  hotelBooking:any[]=[]


  constructor(private customerBookingService: CustomerBookingService,private bookedService:BookedService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
    this.customerBookingService.getBookings(this.selectedService, this.filter)
    .subscribe({
      next: (data) => {
        this.bookings = data
      },
      error: (err) => {console.log(err)}
    })

  }

  onFilterChange(e:any) {
    this.selectedService = e.target.value
    if(this.selectedService=="Hotel"){
     return this.getHotelBooking();
    }
    this.customerBookingService.getBookings(this.selectedService, this.filter)
    .subscribe({
      next: (data) => {
        this.bookings = data
      },
      error: (err) => {console.log(err)}
    })
  }

  filterBookings(status: string) {

    this.filter=status
    if(this.selectedService=="Hotel"){
      return this.getHotelBooking();
     }
    this.customerBookingService.getBookings(this.selectedService, this.filter)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.bookings = data
        console.log(this.bookings)
      },
      error: (err) => {console.log(err)}
    })
  }

  writeFeedback() {
    console.log(this.value)
    console.log(this.description)
    console.log(this.bookingId)
    this.customerBookingService.submitFeedback(this.bookingId, this.value, this.description)
    .subscribe({
      next: (data) => {
        this.showFeedback=false
        this.showFeedbackMessage=true
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  cancelBooking(bookingId:any){
    console.log("In cancel booking " + bookingId)
    this.customerBookingService.cancelBooking(bookingId, this.selectedService)
    .subscribe({
      next: (data) => {
        console.log("booking has been deleted")
        window.location.reload();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getHotelBooking(){
    this.bookedService.getBookingDetails(this.selectedService,this.filter).subscribe({
      next:(data)=>{
        console.log(data);
        this.hotelBooking=data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
   
  }

  cancelHotelBooking(bid:any){
   
       this.bookedService.cancelBooking(bid,this.selectedService).subscribe({
        next:(data)=>{
          console.log(data)
          window.location.reload();
       },
       error:(err)=>{
        console.log(err)
       }
       })
  }

  reviewBooking(hotelId:any){
    this.router.navigateByUrl(`/add-review/${hotelId}`)
  }

}

// |  1 | Delhi       |
// |  2 | Mumbai      |
// |  3 | Pune        |
// |  4 | Bangalore   |
// |  5 | Chennai     |
