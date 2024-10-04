import { Component, Input } from '@angular/core';
import { FlightBookingService } from '../../service/flightBooking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css'
})
export class FlightCardComponent {
  @Input() flight: any;

  constructor(private flightBookingService:FlightBookingService, private router: Router) {}

  initiateBooking(flight : any) {
    this.flightBookingService.initiateBooking(flight.source, flight.destination, flight.sourceStopNo, flight.destinationStopNo, flight.amount)
    .subscribe({
      next: (data) => {
        localStorage.removeItem("flightsData")
        localStorage.removeItem("flight")
        localStorage.setItem("flight", JSON.stringify(flight))
        this.router.navigateByUrl(`/flights/booking/${flight.flightId}/${data.id}`)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}

// FLIGHT................
// amount: 3450
// destination: "Kochi"
// destinationArrival: "19:30:00"
// destinationStopNo: 2
// distance: 670
// flightDescription: "A premium flight experience with world-class amenities and on-time departures."
// flightId: 4
// flightName: "Skyliner Flight"
// flightNumber: "S9267"
// source: "Chennai"
// sourceArrival: "15:00:00"
// sourceStopNo: 1

// DATA...................
// id: 3


// Things that I need DATA - id FLIGHT - 