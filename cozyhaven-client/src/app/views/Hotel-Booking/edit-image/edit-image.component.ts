import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelProviderComponent } from "../hotel-provider/hotel-provider.component";
import { error } from 'console';

@Component({
  selector: 'app-edit-image',
  standalone: true,
  imports: [NgFor, HotelProviderComponent],
  templateUrl: './edit-image.component.html',
  styleUrl: './edit-image.component.css'
})
export class EditImageComponent implements OnInit{

  images:any[]=[];
  roomId:any;

  constructor(private hotelService:HotelService,private route:ActivatedRoute,private router:Router){}
 
 
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
    this.roomId = params.get("roomId")
    this.fetchImages();
   
  })
}

  fetchImages():void{
    this.hotelService.getImageByRoom(this.roomId).subscribe({
      next: (data) => {
        console.log(data)
        this.images = data; 
        console.log(this.images);
      },
      error: (err) => {
        console.error('Error fetching images:', err);
      }
    })
  }

  navigateToUploadImage(roomId:any){
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get("id");
    })

    this.router.navigateByUrl(`/room-images/${this.roomId}`);
  }

  deleteImage(imageId:number){
    this.hotelService.deleteImage(imageId).subscribe({
      next:()=>{
        this.images=this.images.filter(i=>i.id!==imageId);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
