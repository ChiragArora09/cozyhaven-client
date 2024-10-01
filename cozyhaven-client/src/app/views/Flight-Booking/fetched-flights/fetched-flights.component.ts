import { Component } from '@angular/core';
import { FlightDataService } from '../../../service/flightData.service';
import { NgFor } from '@angular/common';
import { FlightCardComponent } from '../../../components/flight-card/flight-card.component';

@Component({
  selector: 'app-fetched-flights',
  standalone: true,
  imports: [NgFor, FlightCardComponent],
  templateUrl: './fetched-flights.component.html',
  styleUrl: './fetched-flights.component.css'
})
export class FetchedFlightsComponent {
  flights: any[] = [];

  constructor(private flightDataService: FlightDataService) {}

  ngOnInit() {
    const flightsData = this.flightDataService.getFlights();
    this.flights = flightsData;
  }
}
