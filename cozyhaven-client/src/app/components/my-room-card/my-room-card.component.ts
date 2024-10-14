import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../service/hotel.service';
import { NgFor } from '@angular/common';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";

@Component({
  selector: 'app-my-room-card',
  standalone: true,
  imports: [NgFor, HotelProviderComponent],
  templateUrl: './my-room-card.component.html',
  styleUrl: './my-room-card.component.css'
})
export class MyRoomCardComponent implements OnInit{

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
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get("id")
    })
    this.router.navigateByUrl(`/edit-room/${this.roomId}/${id}`)
  }

  navigateToEditImage(roomId:number){
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get("id")
    })
  
    this.router.navigateByUrl(`/edit-image/${this.roomId}/${roomId}`)
   }
    
onDelete(roomId:number){
  this.rooms=this.rooms.filter(r=>r.id!==roomId)
}
  }
  
