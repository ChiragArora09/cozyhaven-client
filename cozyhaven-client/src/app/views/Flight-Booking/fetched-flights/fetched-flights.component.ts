import { Component } from '@angular/core';
import { FlightDataService } from '../../../service/flightData.service';
import { NgFor } from '@angular/common';
import { FlightCardComponent } from '../../../components/flight-card/flight-card.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-fetched-flights',
  standalone: true,
  imports: [NgFor, FlightCardComponent, NavbarComponent],
  templateUrl: './fetched-flights.component.html',
  styleUrl: './fetched-flights.component.css'
})
export class FetchedFlightsComponent {
  flights: any[] = [];

  constructor(private flightDataService: FlightDataService) {}

  ngOnInit() {
    const flightsData = this.flightDataService.getFlights();

    if (flightsData && flightsData.length > 0) {
      this.flights = flightsData;
      localStorage.setItem('flightsData', JSON.stringify(flightsData));
    }
    else{
      const storedFlights = localStorage.getItem('flightsData');
      if (storedFlights){
        this.flights = JSON.parse(storedFlights);
      } 
    }
  }

  filterbyMorning(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T00:30:00Z")
    const endTime = new Date("1970-01-01T06:30:00Z");

    this.flights =  this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`)
      return flightTime >= startTime && flightTime <= endTime;
    })
  }

  filterbyAfternoon(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T06:30:00Z")
    const endTime = new Date("1970-01-01T12:30:00Z");

    this.flights = this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`)
      return flightTime >= startTime && flightTime <= endTime;
    })
  }

  filterbyLate(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T12:30:00Z")
    const endTime = new Date("1970-01-01T18:29:00Z");

    this.flights = this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`)
      return flightTime >= startTime && flightTime <= endTime;
    })
  }
}
