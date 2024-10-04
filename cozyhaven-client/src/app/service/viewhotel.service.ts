import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewhotelService {

  constructor(private http:HttpClient) { }

  getHotelList():Observable<any>{
    return this.http.get('http://localhost:8082/hotel/all',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  addHotel(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/hotel/addHotel', obj, 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      })
    }

  }
