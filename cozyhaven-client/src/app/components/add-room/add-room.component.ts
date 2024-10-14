import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [ReactiveFormsModule,HotelProviderComponent,RouterLink,NgIf,NgFor],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent{
  addRoomForm: FormGroup
  hotelId: any
  roomId:any[]=[];


  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.addRoomForm= new FormGroup({
      bedtype: new FormControl('',Validators.required),
      roomtype: new FormControl('',Validators.required),
      totalRooms: new FormControl('',Validators.required),
      capacity: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
    })
  }

  addRoom(){
    const data = {
      capacity: this.addRoomForm.value.capacity,
      price:this.addRoomForm.value.price,
      roomType: this.addRoomForm.value.roomtype,
      bedType: this.addRoomForm.value.bedtype,
      bookedRooms:0,
      totalRooms:this.addRoomForm.value.totalRooms
    }

    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get("id")
    })

    this.hotelService.addRooms(data, this.hotelId)
    .subscribe({
      next: (data) => {
        const roomId = data.id
        this.roomId.push(roomId)
        localStorage.setItem("roomIds", JSON.stringify(this.roomId));
        this.addRoomForm.reset();
      },
      error: (err) => {console.log(err)}
    })
  }

 resetForm(){}

 navigateToAddedRooms(){

  this.activatedRoute.paramMap.subscribe(params => {
    this.hotelId = params.get("id")
  })

  this.router.navigateByUrl(`/my-addedRoom-card/${this.hotelId}`)
 }
  

}
