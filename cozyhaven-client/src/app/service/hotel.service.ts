import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelSearch } from '../model/hotelSearch.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

   searchHotel:string='http://localhost:8082/hotel/search';

  constructor(private http:HttpClient) { }

  getHotels(obj:HotelSearch):Observable<any>{
    return this.http.post(this.searchHotel,{
      "location":obj.location,
      "checkInDate":obj.checkInDate,
      "checkOutDate":obj.checkOutDate,
      "numberGuests":obj.numberGuests,
      "numRooms":obj.numRooms
     });
  }
}
