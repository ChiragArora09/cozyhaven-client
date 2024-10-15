import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RoomDetailsComponent } from '../../views/Hotel-Booking/room-details/room-details.component';
import { HotelService } from '../../service/hotel.service';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-room-type',
  standalone: true,
  imports: [RouterLink, RoomDetailsComponent, NgFor, NgIf, NavbarComponent],
  templateUrl: './room-type.component.html',
  styleUrl: './room-type.component.css'
})
export class RoomTypeComponent implements OnInit{

  hotelId:any
  rooms:any[]=[];
  roomType:any;

  constructor(private router: Router,private route:ActivatedRoute,private hotelService:HotelService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get("hotelId");
  });
  this.fetchAll();
  // this.route.paramMap.subscribe(params => {
  //   this.hotelId = params.get("hotelId")
  // })
  }

  fetchAll(){
    this.hotelService.getRoomList(this.hotelId).subscribe({
      next:(data)=>{
        console.log(data,'check')
        this.rooms=data
        console.log(this.rooms)
      },
      error:(err)=>{
        console.log(err.msg)
      }
    })
  }

  navigatetoMoreDetails(roomId:any){
    this.route.paramMap.subscribe(params => {
    this.hotelId = params.get("hotelId")
    })
      this.router.navigateByUrl(`/room-details/${this.hotelId}/${roomId}`)
  }

  onStandard(){
    this.roomType="STANDARD";
    this.hotelService.getRoomType(this.hotelId,this.roomType).subscribe({
      next:(data)=>{
        console.log(data);
        this.rooms=data;
      }

    })
  }

  onDeluxe(){
    this.roomType="DELUXE";
    this.hotelService.getRoomType(this.hotelId,this.roomType).subscribe({
      next:(data)=>{
        console.log(data);
        this.rooms=data;
      }

    })

  }

  onSuite(){
    this.roomType="SUITE";
    this.hotelService.getRoomType(this.hotelId,this.roomType).subscribe({
      next:(data)=>{
        console.log(data);
        this.rooms=data;
      }

    })

  }
 
}
