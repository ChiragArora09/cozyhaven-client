import { Component } from '@angular/core';
import { HotelProviderComponent } from "../hotel-provider/hotel-provider.component";
import { BookedService } from '../../../service/booked.service';
import { CommonModule, NgFor } from '@angular/common';
import { Booked } from '../../../model/booking.model';

@Component({
  selector: 'app-updata-status',
  standalone: true,
  imports: [HotelProviderComponent,NgFor,CommonModule],
  templateUrl: './updata-status.component.html',
  styleUrl: './updata-status.component.css'
})
export class UpdataStatusComponent {

  booked: Booked []=[];
  filter:Booked[]=[];
  show:boolean=false;
  
  constructor(private bookedService:BookedService){

    this.bookedService.getBookedList().subscribe({
      next:(data)=>{
        this.booked=data
        console.log(this.booked)
      },
      error:(err)=>{
        console.log(err.message)
      }
    });
    }


    

    filterByStatus(status:string){
      if(status==='ALL'){
        this.filter=this.booked;
      }
      else{
        this.filter=this.booked.filter(b=>b.status===status);
      }

      this.show=(status==='CONFIRMED'); 

    }

    updateBooking(){
    this.bookedService.updateBooking().subscribe({
      next:(data)=>{

        console.log(data);
      }
    })

  }
}
  