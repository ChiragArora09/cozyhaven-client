import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  uploadImage(formData:FormData,id:any){
    return this.http.post(`http://localhost:8082/room/image/upload/`+id,formData)
  }

  uploadHotelImage(formData:FormData,id:any){
    return this.http.post(`http://localhost:8082/hotel/image/upload/`+id,formData)
  }
}
