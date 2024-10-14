import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {

  addReviewForm:FormGroup;
  comments:string='';
  rating:string='';
  star:string='';
  customer:any;
  successMsg:string=undefined
  errorMsg:string=undefined
  hotelId:any

  constructor(private hotelService:HotelService,private router:Router,private route:ActivatedRoute){
    this.addReviewForm=new FormGroup({
      comments: new FormControl('',Validators.required),
      rating: new FormControl('',Validators.required),
      star: new FormControl('',Validators.required)
    })
}



onClick(){
  this.route.paramMap.subscribe(params => {
    this.hotelId = params.get("hotelId");
  })
  this.hotelService.addReview(this.hotelId,{
    "comments":this.addReviewForm.value.comments,
    "rating":this.addReviewForm.value.rating,
    "star":this.addReviewForm.value.star
  }).subscribe({
    next:(data)=>{
      console.log(data);
      this.successMsg='review Added';
      this.errorMsg='';

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
