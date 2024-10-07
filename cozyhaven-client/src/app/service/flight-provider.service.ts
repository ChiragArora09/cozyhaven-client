import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightProviderService {

  constructor(private http: HttpClient) { }

  getMyFlights(){
    const token = localStorage.getItem('token')
    return this.http.get("http://localhost:8082/flight/get-my-flights", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

}
