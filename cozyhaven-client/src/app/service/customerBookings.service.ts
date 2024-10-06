import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CustomerBookingService {

    constructor(private http: HttpClient) { }

    getBookings(selectedService:any, filter:any) : Observable<any> {
        const token = localStorage.getItem('token')
        return this.http.get(`http://localhost:8082/my-bookings/bookings/${selectedService}/${filter}`, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
        })
    }

    submitFeedback(bookingId:any, stars:number, description:string) {
        const token = localStorage.getItem('token')
        return this.http.post("http://localhost:8082/my-bookings/submit-feedback", {
            "bookingId": bookingId,
            "stars": stars,
            "description": description,
        }, {headers: new HttpHeaders().set('Authorization', 'Bearer '+token)})
    }

    cancelBooking(bookingId: any, bookingType: any) {
        const token = localStorage.getItem('token')
        console.log(token)
        console.log(bookingType)
        console.log(bookingId)
        return this.http.post(`http://localhost:8082/my-bookings/${bookingType}/upcoming/${bookingId}/delete`, {})
    }
}