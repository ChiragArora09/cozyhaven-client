import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FlightCardComponent } from '../../../components/flight-card/flight-card.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fetched-flights',
  standalone: true,
  imports: [NgFor, FlightCardComponent, NavbarComponent, RouterLink],
  templateUrl: './fetched-flights.component.html',
  styleUrl: './fetched-flights.component.css'
})
export class FetchedFlightsComponent {
  flights: any[] = [];
  stringMsg = ""

  constructor() {}

  ngOnInit() {
      const storedFlights = localStorage.getItem('flightsData');
      if (storedFlights){
        this.flights = JSON.parse(storedFlights);
      }
      else{
        this.stringMsg = "No flights to display"
      }
  }

  noFilter(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
  }

  filterbyMorning(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T00:30:00Z")
    const endTime = new Date("1970-01-01T06:30:00Z");

    this.flights =  this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`) // have to subtract 5:30
      const subtractHourTime = new Date(flightTime)
      subtractHourTime.setHours(flightTime.getHours() - 5)
      const subtractMinutesTime = new Date(subtractHourTime)
      subtractMinutesTime.setMinutes(subtractHourTime.getMinutes() - 30)
      return subtractMinutesTime >= startTime && subtractMinutesTime <= endTime;
    })
  }

  filterbyAfternoon(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T06:30:00Z")
    const endTime = new Date("1970-01-01T12:30:00Z");

    this.flights = this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`)
      const subtractHourTime = new Date(flightTime)
      subtractHourTime.setHours(flightTime.getHours() - 5)
      const subtractMinutesTime = new Date(subtractHourTime)
      subtractMinutesTime.setMinutes(subtractHourTime.getMinutes() - 30)
      return subtractMinutesTime >= startTime && subtractMinutesTime <= endTime;
    })
  }

  filterbyLate(){
    this.flights = JSON.parse(localStorage.getItem('flightsData'))
    const startTime = new Date("1970-01-01T12:30:00Z")
    const endTime = new Date("1970-01-01T18:29:00Z");

    this.flights = this.flights.filter(f => {
      const flightTime = new Date(`1970-01-01T${f.sourceArrival}Z`)
      const subtractHourTime = new Date(flightTime)
      subtractHourTime.setHours(flightTime.getHours() - 5)
      const subtractMinutesTime = new Date(subtractHourTime)
      subtractMinutesTime.setMinutes(subtractHourTime.getMinutes() - 30)
      return subtractMinutesTime >= startTime && subtractMinutesTime <= endTime;
    })
  }
}

// flight: "{\"flightName\":\"Wingspan Flight\",\"flightNumber\":\"Wing101\",\"flightDescription\":\"A long-haul flight, featuring spacious seats, gourmet meals, and personalized service.\",\"source\":\"Chennai\",\"destination\":\"Kochi\",\"sourceArrival\":\"13:30:00\",\"destinationArrival\":\"17:00:00\",\"distance\":680,\"amount\":3500,\"flightId\":8,\"sourceStopNo\":1,\"destinationStopNo\":2}"
// role: "ROLE_CUSTOMER"
// token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huIiwiZXhwIjo1MTQ5NDEwMjExMDU3MTYxLCJpYXQiOjE3Mjc4OTg0MTB9.ML49esQNqJM_-tebOPDX_j_PeB5g9yE426HcesyXcmQ"
// username: "john"


// flight: "{\"flightName\":\"Skyliner Flight\",\"flightNumber\":\"S9267\",\"flightDescription\":\"A premium flight experience with world-class amenities and on-time departures.\",\"source\":\"Chennai\",\"destination\":\"Kochi\",\"sourceArrival\":\"15:00:00\",\"destinationArrival\":\"19:30:00\",\"distance\":670,\"amount\":3450,\"flightId\":4,\"sourceStopNo\":1,\"destinationStopNo\":2}"
// role: "ROLE_CUSTOMER"
// token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huIiwiZXhwIjo1MTQ5NDEwMjExMDU3MTYxLCJpYXQiOjE3Mjc4OTg0MTB9.ML49esQNqJM_-tebOPDX_j_PeB5g9yE426HcesyXcmQ"
// username : "john"