import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../service/hotel.service';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-my-added-room-card',
  standalone: true,
  imports: [HotelProviderComponent,NgFor,NgIf],
  templateUrl: './my-added-room-card.component.html',
  styleUrl: './my-added-room-card.component.css'
})
export class MyAddedRoomCardComponent implements OnInit{

  hotelId:string;
  rooms:any[]=[];
  roomId:any

  constructor(private route:ActivatedRoute,private hotelService:HotelService,private router:Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get("id");
      this.hotelService.getRoomList(this.hotelId).subscribe({
        next:(data)=>{
          this.rooms=data
          console.log(this.rooms)
        },
        error:(err)=>{
          console.log(err.msg)
        }
      })
  });
  }
   
  onEdit(id:any){
    this.router.navigateByUrl('/edit-room/'+id)
  }

  navigateToRoomsImages(roomId:number){
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get("id");
    })
     this.router.navigateByUrl(`/room-images/${this.hotelId}/${roomId}`)
}
}
