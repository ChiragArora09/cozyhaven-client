import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../service/hotel.service';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [HotelProviderComponent,NgIf,NgFor,FormsModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css'
})
export class EditRoomComponent implements OnInit{

  bedType:string='';
  roomType:string='';
  totalRooms:number;
  price:number;
  capacity:number;

  successMsg:string='';
  errorMsg:string='';

  id:any;
roomId:any
  show:boolean=false;
  hotelId:any

  constructor(private hotelService:HotelService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.roomId = params.get("roomId");
      this.hotelId = params.get("hotelId");
  })
   
    this.hotelService.getRoomById(this.roomId).subscribe({
      next:(data)=>{
        this.bedType=data.bedType;
        this.roomType=data.roomType;
        this.totalRooms=data.totalRooms;
        this.price=data.price;
        this.capacity=data.capacity;
      },
      error:()=>{}
    });
  }

  resetmsg(){}

  onClick(){
    const roomData = {
      "id": this.id,
      "bedType": this.bedType,
      "roomType": this.roomType,
      "price": this.price,
      "capacity": this.capacity
    };

    this.hotelService.addRooms(roomData, this.roomId)
      .subscribe({
        next: (data) => {
          this.successMsg = 'Room Edited';
          this.show = true;
          this.errorMsg = '';
          this.router.navigateByUrl(`/my-room-card/${this.hotelId}`);
        },
        error: (err) => {
          this.successMsg = undefined;
          this.show = false;
          console.log(err);
          if (err.status === 305) {
            this.errorMsg = err.error;
          }
        }
      });
  }

  onShowClick() {
    this.router.navigateByUrl("/my-room-card");
  }
}