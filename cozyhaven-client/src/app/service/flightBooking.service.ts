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

    addTravellers(bookingId: any, travelers: any[]) : Observable<any> {
        console.log(travelers)
        const token = localStorage.getItem("token")
        return this.http.post(`http://localhost:8082/flight/booking/travellers/${bookingId}`, travelers)
    }

    getAvailableSeats(bookingId: number, flightId: number, date:any) : Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
        const jDate = JSON.stringify(date)
        return this.http.post(`http://localhost:8082/flight/booking/${bookingId}/${flightId}/get-seats`, jDate, {headers})
    }
    
    confirmBooking(seats:any, bookingId) : Observable<any> {
        return this.http.post(`http://localhost:8082/flight/seat-booking/${bookingId}`, seats)

    }

    getPayment(bookingId: any) : Observable<any> {
        return this.http.get(`http://localhost:8082/flight/${bookingId}/payment`)
    }

    getOffers(bookingId: any) : Observable<any> {
        return this.http.get(`http://localhost:8082/flight/get-offers/${bookingId}`)
    }

    completeBooking(discount, totalAmount, loyaltyPoints, bookingId, dateOfJourney) : Observable<any> {
        return this.http.post(`http://localhost:8082/flight/${bookingId}/confirm-booking`, {
            "discount":discount,
	        "amount":totalAmount,
	        "loyaltyPoints":loyaltyPoints,
            "dateOfJourney": dateOfJourney
        })   
    }

    getMyWalletPoints(bookingId:any) : Observable<any> {
        const token = localStorage.getItem('token')
        return this.http.get(`http://localhost:8082/flight/${bookingId}/loyalty-points`, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
        })
    }

    updateLoyaltyPointsForCustomer(bookingId:any, loyaltyPointsUsed:any, loyaltyPointsEarned:any, date:any) : Observable<any> {
        const token = localStorage.getItem('token')
        return this.http.post('http://localhost:8082/loyalty-points/add', {
            "bookingId":bookingId,
            "loyaltyPointsUsed":loyaltyPointsUsed,
            "loyaltyPointsEarned": loyaltyPointsEarned,
            "dateOfTransaction":date
        }, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
        })
    }


}