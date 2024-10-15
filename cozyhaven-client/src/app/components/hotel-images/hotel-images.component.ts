import { Component } from '@angular/core';
import { ImageService } from '../../service/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hotel-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hotel-images.component.html',
  styleUrl: './hotel-images.component.css'
})
export class HotelImagesComponent {
  hotelId:any
  file:File=null;
  imageMsg:string='';
  images:string[]=[];

  constructor(private imageService:ImageService,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.hotelId=params.get("id")
    })
  }
  
  onChange(event:any){
    this.file=event.target.files[0];
  }

  onUpload(){
    this.activatedRoute.paramMap.subscribe(params=>{
      this.hotelId=params.get("id")
    });

    let formData = new FormData();
    formData.set('file',this.file); 
    this.imageService.uploadHotelImage(formData,this.hotelId ).subscribe({
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
  navigateToAddRoom(){
    this.activatedRoute.paramMap.subscribe(params => {
      
      this.hotelId = params.get("id");
      
    })
    this.router.navigateByUrl(`/add-room/${this.hotelId}`)
    
  }

}
