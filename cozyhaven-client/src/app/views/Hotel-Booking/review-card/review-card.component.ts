import { Component } from '@angular/core';
import { HotelProviderComponent } from "../hotel-provider/hotel-provider.component";
import { BookedService } from '../../../service/booked.service';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [HotelProviderComponent,NgFor],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {

  review:any[]=[];

  constructor(private bookedService:BookedService){
   
    this.bookedService.getReview().subscribe({
      next:(data)=>{
        this.review=data;
        console.log(this.review);
            },
            error: (err) => {
              console.error(err);
            }
    });

  }

  generateStars(star: string): string {
    const starMapping: { [key: string]: number } = {
      'ONE': 1,'TWO': 2, 'THREE': 3,'FOUR': 4,'FIVE': 5
    };
    const starCount = starMapping[star] || 0; 
    return '★'.repeat(starCount) + '☆'.repeat(5 - starCount); 
  }

  deleteReview(reviewId:number){
    this.bookedService.deleteReview(reviewId).subscribe({
      next:()=>{
        console.log('Reviews deleted');
        this.review = this.review.filter(r => r.id !== reviewId);
      },
      error:(err)=>{
        console.log(err);
      }
    })
    
  }
}
