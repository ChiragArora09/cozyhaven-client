import { Component } from '@angular/core';
import { HotelDataService } from '../../../service/hotelData.service';
import { HotelCardComponent } from '../../../components/hotel-card/hotel-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [NgFor ,HotelCardComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {

  hotels:any[]=[];

  constructor(private hotelDataService:HotelDataService){}

  ngOnInit(){
    const hotelsData=this.hotelDataService.getHotels();

    this.hotels=hotelsData;
    console.log(this.hotels)
  }
}
