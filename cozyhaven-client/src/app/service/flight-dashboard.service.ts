import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDashboardService {

  constructor(private http: HttpClient) { }

  getPopularFlights() : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get("http://localhost:8082/dashboard/flight-popularity", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  getFlightRevenue() : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get("http://localhost:8082/dashboard/flightRevenue", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  getNumberOfTotalBookings() : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get("http://localhost:8082/dashboard/myTotalBookings", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  getMyTotalUniqueCustomers() : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get("http://localhost:8082/dashboard/myTotalCustomers", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  getFlightRevenueByDates(flightId:any) : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get(`http://localhost:8082/dashboard/flightRevenue/${flightId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  getFlightBookingsByDate(date: any) : Observable<any> {
    const token = localStorage.getItem("token")
    const params = new HttpParams().set('date', date);
    return this.http.get("http://localhost:8082/dashboard/flightBookingsByDate", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token),
      params: params
    })
  }

  getPopularRoutes() : Observable<any> {
    const token = localStorage.getItem("token")
    return this.http.get("http://localhost:8082/dashboard/popularRoutes", {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

}
