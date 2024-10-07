import { Component } from '@angular/core';
import { FlightProviderSidebarComponent } from '../flight-provider-sidebar/flight-provider-sidebar.component';
import { FlightProviderService } from '../../service/flight-provider.service';
import { NgFor } from '@angular/common';
import { MyFlightCardComponent } from '../my-flight-card/my-flight-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-provider-flights',
  standalone: true,
  imports: [FlightProviderSidebarComponent, NgFor, MyFlightCardComponent],
  templateUrl: './flight-provider-flights.component.html',
  styleUrl: './flight-provider-flights.component.css'
})
export class FlightProviderFlightsComponent {
  myFlights: any;

  constructor(private flightProviderService: FlightProviderService, private router: Router) {}

  ngOnInit() {
    this.flightProviderService.getMyFlights()
    .subscribe({
      next: (data) => {
        this.myFlights = data
        localStorage.setItem('myFlights', JSON.stringify(data))
      },
      error: (err) => {console.log(err)}
    })
}

addFlight() {
  this.router.navigateByUrl('/add-flight')
}

}
