import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { ViewhotelService } from '../../service/viewhotel.service';

@Component({
  selector: 'app-edit-hotel',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, HotelProviderComponent,RouterLink],
  templateUrl: './edit-hotel.component.html',
  styleUrl: './edit-hotel.component.css'
})

export class EditHotelComponent implements OnInit{
  
  
  hotelName:string='';
  description:string='';
  location:string='';

  successMsg:string='';
  errorMsg:string='';

  id:any;

  show:boolean=false;

  constructor(private hotelService:HotelService,private route:ActivatedRoute,private router:Router){
    this.id=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.hotelService.getHotelById(this.id).subscribe({
      next:(data)=>{
        this.hotelName=data.hotelName;
        this.description=data.description;
        this.location=data.location;
      },
      error:()=>{}
    });
  }
    resetmsg(){
    }

    onClick(){
      this.hotelService.addHotel({
        "id":this.id,
        "hotelName":this.hotelName,
        "description":this.description,
        "location":this.location
      })
      .subscribe({
        next:(data)=>{
          this.successMsg='Hotel Edited';
          this.show=true;
          this.errorMsg=''
        },
        error: (err)=>{
          this.successMsg = undefined;
          this.show = false;
          console.log(err)
          if(err.status == 305){
            this.errorMsg = err.error
          }
          else{
            this.router.navigateByUrl("/**")
          }
        }
      })
    }
    onShowClick(){
        this.router.navigateByUrl("/view-list")
       }
  
  }

 











//   constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute,private router:Router,private viewHotelService:ViewhotelService,private fb:FormBuilder){
//        this.id=this.activatedRoute.snapshot.paramMap.get('id');
//   }

//   ngOnInit(): void {

//     this.addHotelForm = this.fb.group({
//       hotelName: [this.hotelName, Validators.required],
//       description: [this.description, Validators.required],
//       location: [this.location, Validators.required],
//     });

//     this.hotelService.getHotelById(this.id).subscribe({
//       next:(data)=>{
//         this.hotelName=data.hotelName;
//         this.description=data.description;
//         this.location=data.location;
//       },
//       error: ()=>{}
//     });
//     throw new Error('Method not implemented.');
//   }

//   onClick(){
//     this.hotelService.addHotel({
//       "id": this.id,
//       "hotelName":this.addHotelForm.value.hotelName,
//       "description":this.addHotelForm.value.description,
//       "location":this.addHotelForm.value.location
//     })
//     .subscribe({
//       next:(data)=>{
//         this.successMsg = 'Hotel details edited';
//         this.show = true; 
//       this.errorMsg =''
//       },
//       error: (err)=>{
//         this.successMsg = undefined;
//         this.show = false;
//         console.log(err)
//         if(err.status == 305){
//           this.errorMsg = err.error
//         }
//         else{
//           this.router.navigateByUrl("/**")
//         }
//       }
//     })
// }
// onShowClick(){
//   this.router.navigateByUrl("/view-list")
// }
  
// }
