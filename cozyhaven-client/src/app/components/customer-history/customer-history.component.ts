import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerBookingService } from '../../service/customerBookings.service';
import { RatingModule } from 'primeng/rating';

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

  constructor(private customerBookingService: CustomerBookingService) {}

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

}

// |  1 | Delhi       |
// |  2 | Mumbai      |
// |  3 | Pune        |
// |  4 | Bangalore   |
// |  5 | Chennai     |
