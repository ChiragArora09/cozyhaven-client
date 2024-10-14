import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlightBookingService } from '../../service/flightBooking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.css'
})
export class SeatSelectionComponent {
  @Input() seats: any[] = [];
  selectedSeats: any[] = [];
  seatInfo: boolean = false
  hoveredSeat:any
  bookingId: any = null
  payment: any[] = []

  constructor(private flightBookingService: FlightBookingService, private activatedRoute: ActivatedRoute, private router: Router) {}

  selectSeat(seat: any): void {
    if(!seat.selected){
      seat.selected = true
      this.selectedSeats.push(seat.id)
    }else{
      seat.selected = false;
      const index = this.selectedSeats.indexOf(seat.id);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    }
    console.log(this.selectedSeats)
  }

  showDetails(seat: any) {
    this.seatInfo = true
    this.hoveredSeat = seat
  }

  hideDetails() {
    this.seatInfo = false
  }


  confirmBooking() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookingId = params.get("bookingId")
    })

    this.flightBookingService.confirmBooking(this.selectedSeats, this.bookingId)
    .subscribe({
      next: (data) => {
        this.flightBookingService.getPayment(this.bookingId)
        .subscribe({
          next: (data) => {
            console.log(data)
            this.payment = data
            localStorage.setItem('paymentData', JSON.stringify(this.payment))
            this.router.navigateByUrl(`/flight/booking/payment/${this.bookingId}`)
          },
          error: (err) => {console.log(err)}
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
