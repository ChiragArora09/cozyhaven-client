import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  flights: any[] = [];

  setFlights(flights: any[]) {
    this.flights = flights;
  }

  getFlights() {
    return this.flights;
  }
}