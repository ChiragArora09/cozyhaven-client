// src/app/flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FlightInsertModel {
//   flight: {
//     description: string;
//     name: string;
//     number: string;
//   };
//   flightCities: Array<{
//     arrival: string;
//     departure: string;
//     distance: number;
//     stop_number: number;
//     // city_id: number;
//   }>;
//   classes: Array<{
//     type: string;
//   }>;
//   seats: Array<{
//     // flight_class_id: number;
//     flight_seat_type: string;
//     seat_number: string;
//   }>;
flight: any
cities: any
classes: any
seats:any
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  createFlight(payload: FlightInsertModel) {
    console.log(payload)
  }

  getServiceProviders(): Observable<any> {
    return this.http.get('http://localhost:3000/api/service_providers');
  }

  getCities(): Observable<any> {
    return this.http.get('http://localhost:8082/flight/get-flight-cities');
  }
}
