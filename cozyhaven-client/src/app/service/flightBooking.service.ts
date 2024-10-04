import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FlightBookingService {
    constructor(private http: HttpClient) { }

    initiateBooking(source:any, destination:any, sourceCityNumber:any, destinationCityNumber:any, amount:any) : Observable<any> {
        const token = localStorage.getItem("token")
        return this.http.post("http://localhost:8082/flight/booking", {
            "source": source,
            "destination": destination,
            "sourceCityNumber": sourceCityNumber,
            "destinationCityNumber": destinationCityNumber,
            "amount": amount
        }, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
        })
    }

    addTravellers(bookingId: any, travelers: any[]) {
        console.log(travelers)
        const token = localStorage.getItem("token")
        return this.http.post(`http://localhost:8082/flight/booking/travellers/${bookingId}`, travelers)
    }

    getAvailableSeats(bookingId: number, flightId: number, date:any){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
        const jDate = JSON.stringify(date)
        return this.http.post(`http://localhost:8082/flight/booking/${bookingId}/${flightId}/get-seats`, jDate, {headers})
    }
    


}