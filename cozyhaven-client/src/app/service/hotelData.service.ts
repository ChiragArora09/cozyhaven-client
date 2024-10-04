import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService{
   hotels:any[]=[];

   setHotels(hotels:any[]){
    this.hotels=hotels;
   }

   getHotels(){
    return this.hotels;
   }
}