import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightProviderService {

  constructor(private http: HttpClient) { }

  getMyFlights(): Observable<any>{
    const token = localStorage.getItem('token')
    return this.http.get("http://localhost:8082/flight/get-my-flights", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  createOffer(flightId:any, offerData:any): Observable<any> {
    return this.http.post(`http://localhost:8082/flight/create-offer/${flightId}`, offerData)
  }

  getOfferDetails(offerId: any) : Observable<any> {
    return this.http.get(`http://localhost:8082/flight/offer-details/${offerId}`)
  }
  
  editOffer(offerId:any, offerData:any) : Observable<any> {
    return this.http.put(`http://localhost:8082/flight/offer-edit/${offerId}`, offerData)
  }

  changeOfferStatus(offerId:any) : Observable<any> {
    return this.http.put(`http://localhost:8082/flight/changeOfferStatus/${offerId}`, {})
}

}
