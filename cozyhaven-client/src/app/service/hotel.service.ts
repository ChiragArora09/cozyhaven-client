import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelSearch } from '../model/hotelSearch.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  setImage(images: File) {
    throw new Error('Method not implemented.');
  }

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

  addRooms(data: any, hotelId: any) : Observable<any> {
    console.log(data, hotelId)
    const token = localStorage.getItem('token')
    return this.http.post(`http://localhost:8082/room/add/${hotelId}`, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }


  setImages(data:any,hotelId:any,roomId:any):Observable<any>{
    console.log(data, hotelId,roomId)
    const token = localStorage.getItem('token')
    return this.http.post(`http://localhost:8082/image/upload/${hotelId}/${roomId}`,data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)

    })

  }

  getRoomList(hotelId:string):Observable<any>{
    console.log(hotelId,'0000000000')
    const token = localStorage.getItem('token')
   
  return this.http.get(`http://localhost:8082/room/all/${hotelId}`,{
    headers: new HttpHeaders().set('Authorization', 'Bearer '+token)

  })
  }

  addHotel(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/hotel/addHotel', obj, 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      })
    }
  
  getHotelById(id:any):Observable<any>{
    return this.http.get('http://localhost:8082/hotel/get/'+id)
  }

  getRoomById(id:any):Observable<any>{
    return this.http.get('http://localhost:8082/room/get/'+id)
  }

  addExtra(roomId:number,hotelExtra:any):Observable<any>{
    return this.http.post(`http://localhost:8082/room/add/extras/${roomId}`,hotelExtra);
  }

  addAmenities(amenities:any,roomId:number):Observable<any>{
    const token = localStorage.getItem('token')
    return this.http.post(`http://localhost:8082/amenities/add/${roomId}`,amenities,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)

      })
  }

  getImageByRoom(roomId:number):Observable<any>{
    return this.http.get(`http://localhost:8082/room/get/image/${roomId}`);
  }
  
  deleteImage(imageId:number):Observable<any>{
    const token = localStorage.getItem('token')
     return this.http.delete(`http://localhost:8082/image/delete/${imageId}`,{
      
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }   

  deleteHotel(id:number):Observable<any>{
    const token = localStorage.getItem('token')
    return this.http.delete(`http://localhost:8082/hotel/delete/${id}`,{
      
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    }

    )
  }

  getRoomInfo(roomId:any):Observable<any>{
    const token = localStorage.getItem('token')
    console.log(roomId);
       return this.http.get(`http://localhost:8082/room/details/${roomId}`,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       })
  }

  getReviews(hotelId:any):Observable<any>{
    const token = localStorage.getItem('token')
    console.log(hotelId);
       return this.http.get(`http://localhost:8082/hotel/reviews/${hotelId}`,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       })

  }

  getRoomPictures(roomId:any):Observable<any>{
    const token = localStorage.getItem('token')
       return this.http.get(`http://localhost:8082/room/get/image/${roomId}`,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       })
  }

  confirmBooking(data:any,roomId:any):Observable<any>{
    const token = localStorage.getItem('token')
    console.log(data);
    return this.http.post(`http://localhost:8082/booking/room/${roomId}`,data,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       
    })


  }

  addReview(hotelId:any,obj:any){

    const token = localStorage.getItem('token')
    return this.http.post(`http://localhost:8082/reviews/${hotelId}`,obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       
    })

  }

  getRoomType(hotelId:any,roomType:any):Observable<any>{
    const token = localStorage.getItem('token')
    return this.http.get(`http://localhost:8082/room/${hotelId}/${roomType}`,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
       
    })
  }

  

  getBookedRoomsByLocation(location: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/hotel/booked-rooms/${location}`);
  }
}
