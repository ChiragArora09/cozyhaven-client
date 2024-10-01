import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FlightSearch } from "../model/flightSearch.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FlightService {
    constructor(private http: HttpClient) { }

    getFlights(obj: FlightSearch): Observable<any> {
        return this.http.post('http://localhost:8082/flight/flight-between-cities', {
            "source":obj.source,
            "destination": obj.destination,
            "classType": obj.classType
        })
    }

}