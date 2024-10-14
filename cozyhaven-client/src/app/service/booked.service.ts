import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookedService {

  constructor(private http:HttpClient) { }

  
  updateBooking():Observable<any>{
    const token = localStorage.getItem('token')
    console.log(token)
    console.log(localStorage.getItem('username'))
    return this.http.put('http://localhost:8082/room/updateAvailability',{
      headers:new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getReview():Observable<any>{
    return this.http.get('http://localhost:8082/reviews/all',{
      headers:new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  
    })
  }
 
  deleteReview(reviewId:number):Observable<any>{
    return this.http.delete(`http://localhost:8082/reviews/delete/${reviewId}`,{
      headers:new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getBookedList():Observable<any>{
    {
      return this.http.get('http://localhost:8082/booking/all', 
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
      )
    }
  }

  getBookingDetails(selectedService:any,filter:any):Observable<any>{
    console.log(selectedService,filter)
    const token = localStorage.getItem('token')
    return this.http.get(`http://localhost:8082/booking/customer/${selectedService}/${filter}`,{
       headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       
     })
  }

  cancelBooking(bookingId:any,selectedService:any):Observable<any>{
    const token = localStorage.getItem('token')
    return this.http.put(`http://localhost:8082/booking/cancel/${selectedService}/upcoming/${bookingId}`,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+ token)
       
    })
  }
}
