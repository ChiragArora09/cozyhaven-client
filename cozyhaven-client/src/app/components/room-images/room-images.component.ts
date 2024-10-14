import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StepsModule } from 'primeng/steps'
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HotelProviderComponent } from "../../views/Hotel-Booking/hotel-provider/hotel-provider.component";
import { ImageService } from '../../service/image.service';
import { Room } from '../../model/room.model';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-room-images',
  standalone: true,
  imports: [HotelProviderComponent,NgIf,NgFor,RouterLink],
  templateUrl: './room-images.component.html',
  styleUrl: './room-images.component.css'
})
export class RoomImagesComponent implements OnInit {

roomId:any
file:File=null;
imageMsg:string='';
images:string[]=[];
hotelId:any

constructor(private imageService:ImageService,private activatedRoute:ActivatedRoute,private router:Router){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.roomId=params.get("roomId")
    })
  }
  
  onChange(event:any){
    this.file=event.target.files[0];
  }

  onUpload(){
    let formData = new FormData();
    formData.set('file',this.file); 
    this.imageService.uploadImage(formData,this.roomId ).subscribe({
        next:(data)=>{
          this.images.push(this.file.name)
          this.imageMsg = 'Image ' + this.file.name + ' is uploaded' ;
          this.file = null;
        },
        error: (err) => {
          console.log(err);
          this.imageMsg = "Failed to upload image.";
        }
    }); 
  }

  navigateToAmenities(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.roomId = params.get("roomId");
      this.hotelId = params.get("hotelId");
      
    })
    this.router.navigateByUrl(`/add-amenities/${this.hotelId}/${this.roomId}`)
    
  }
  }

