import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HotelProviderComponent } from '../hotel-provider/hotel-provider.component';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,HotelProviderComponent],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {

  addHotelForm:FormGroup;
  hotelName:string='';
  description:string='';
  location:string='';

  successMsg:string=undefined
  errorMsg:string=undefined

  constructor(private viewhotel:ViewhotelService,private router:Router){
    this.addHotelForm=new FormGroup({
      hotelName: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      location: new FormControl('',Validators.required)
    })

  }

  onClick(){
    this.viewhotel.addHotel({
      "hotelName":this.hotelName,
      "description":this.description,
      "location":this.location
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMsg='Hotel Added';
        this.errorMsg=undefined
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

}
