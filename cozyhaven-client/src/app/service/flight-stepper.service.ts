// src/app/flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FlightInsertModel {
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

  createFlight(flight: any) : Observable<any> {
    const token = localStorage.getItem("token");
    return this.http.post('http://localhost:8082/flight/add-flight', flight , {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  createRoute(flightCities: any, flightId:any) : Observable<any> {
    return this.http.post(`http://localhost:8082/flight/add/flight-city/${flightId}`, flightCities)
  }

  addClassesAndSeats(flightClass: any, flightId: any) : Observable<any> {
    return this.http.post(`http://localhost:8082/flight/add-flight-class/${flightId}`, {
        "type":flightClass.type
    })
  }

  addSeats(flightSeats: any, flightClassId: any) : Observable<any> {
    return this.http.post(`http://localhost:8082/flight/add-flight-seat/${flightClassId}`, flightSeats)
  }





  getCities(): Observable<any> {
    return this.http.get('http://localhost:8082/flight/get-flight-cities');
  }
}



// let i=0;
// let flightClassId = -1
// for(let fc of payload.classes){
//   i++;
//   this.http.post<any>(`http://localhost:8082/flight/add-flight-class/${flightId}`, {
//     "type":fc.type
//   }).subscribe(flightClass => {
//     flightClassId=flightClass.id
//   })
//   let flightSeatsForThisClass = payload.seats.filter(seat => seat.flight_class_id === i);
//   let reducedClassId = flightSeatsForThisClass.map(seat => {
//     return {"flightSeatType":seat.flight_seat_type, "seatNumber":seat.seat_number};
//   });

//   this.http.post(`http://localhost:8082/flight/add-flight-seat/${flightClassId}`, reducedClassId)
//   .subscribe((data) => {
//     console.log(data)
//   })
// }
// return "Flight Creating in progress"
// }