import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HotelProviderComponent } from '../hotel-provider/hotel-provider.component';
import { HotelService } from '../../../service/hotel.service';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor,HotelProviderComponent,RouterLink],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {

  addHotelForm:FormGroup;
  hotelName:string='';
  description:string='';
  location:string='';
  serviceProvider:any;
  successMsg:string=undefined
  errorMsg:string=undefined
  show:boolean=false;

  constructor(private hotelService:HotelService,private router:Router){
    this.addHotelForm=new FormGroup({
      hotelName: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      location: new FormControl('',Validators.required)
    })

  }

  onClick(){
    this.hotelService.addHotel({
      "hotelName":this.addHotelForm.value.hotelName,
      "description":this.addHotelForm.value.description,
      "location":this.addHotelForm.value.location
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMsg='Hotel Added';
        this.errorMsg='';
        this.router.navigateByUrl(`/add-room/${data.id}`);

      },
      error:(err)=>{
        this.successMsg = undefined;
        console.log(err)
        this.errorMsg = err.message
      }
    })

  }
  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }
   
  onShowClick() {
    this.router.navigateByUrl(`/hotel-image`);
  }
}

  // onAddHotel(){
  //   this.router.navigateByUrl(`/add-hotel/${this.serviceProvider.id}`)
  // }


