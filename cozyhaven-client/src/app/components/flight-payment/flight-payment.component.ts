import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightBookingService } from '../../service/flightBooking.service';

@Component({
  selector: 'app-flight-payment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './flight-payment.component.html',
  styleUrl: './flight-payment.component.css'
})
export class FlightPaymentComponent {
  payment: any[] = [] // this is to store payment data from the previous screen
  bookingId: any // this is grabbed from url to use in apis
  offers: any[] = [] // this is to store offers for the particular booking
  showOffers: boolean = false // this is to display/close offers div
  totalPayment: any = 0 // this is the original amount before discount
  discount: any = 0 // this is discount on using points and offers
  AmountAfterDiscount: any = 0; // this is the total payment to be made after applying discount 
  messageString: string = "" 
  dateOfJourney: any 
  showLoyaltyPoints: boolean = false
  loyaltyPointsEarned:any=0 // this is the number of loyalty points earned on applying offer
  myWalletLoyaltyPoints:any=0 // this is the number of loyalty points I already have to use on a particular service_provider_service
  loyaltyPointsApplied:boolean = false
  offerApplied: boolean = false
  loyaltyPointsUsed = 0; // after completing this number will decide if the loyalty points were used or not


  constructor(private activatedRoute: ActivatedRoute, private flightBookingService : FlightBookingService, private router: Router) {}

  ngOnInit() {
    const paymentInfo = localStorage.getItem('paymentData');
    const journeyDate = localStorage.getItem('journeyDate');
    if (paymentInfo){
      this.payment = JSON.parse(paymentInfo);
      let x = 0;
      for(let i=0;i<this.payment.length;i++){
        x += parseInt(this.payment[i].totalAmount)
      }
      this.totalPayment = x;
      this.AmountAfterDiscount = this.totalPayment
      this.dateOfJourney = journeyDate
    }
    else{
      return;
    }
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookingId = params.get("bookingId")
    })
    this.flightBookingService.getMyWalletPoints(this.bookingId)
    .subscribe({
      next: (data) => {
        this.myWalletLoyaltyPoints = data
        console.log(this.myWalletLoyaltyPoints)
      },
      error: (err) => {console.log(err)}
    })
}

parseInt(x: any) {
  return x = parseInt(x, 10)
}

getOffers(){
  this.showOffers = true
  this.activatedRoute.paramMap.subscribe(params => {
    this.bookingId = params.get("bookingId")
  })
  this.flightBookingService.getOffers(this.bookingId)
  .subscribe({
    next: (data) => {
      this.offers = data
    },
    error: (err) => {console.log(err)}
  })
}

showMyLoyaltyPoints(){
  this.showLoyaltyPoints = !this.showLoyaltyPoints
}

closeOffers(){
  this.showOffers = false;
}

applyOffer(type, discount, loyaltyPoints){
  if(this.offerApplied){
    return;
  }
  if(type=="percentage"){
    this.discount += (discount/100)*this.totalPayment
    this.AmountAfterDiscount = this.totalPayment - this.discount
  }else if(type="money"){
    this.discount = discount
    this.AmountAfterDiscount = this.totalPayment - this.discount
  }
  this.loyaltyPointsEarned = loyaltyPoints
  this.offerApplied = true
  this.showOffers = false
}

removeOffer(discount){
  this.offerApplied=false
  this.discount -= discount;
  if(this.loyaltyPointsApplied){
    this.discount=this.myWalletLoyaltyPoints
  }
  this.AmountAfterDiscount += discount
  if(this.loyaltyPointsApplied){
    this.AmountAfterDiscount-=this.myWalletLoyaltyPoints
  }
  this.loyaltyPointsEarned = 0
  this.offerApplied = false
}

completeBooking(discount, bookingAmount) {
  if(this.loyaltyPointsApplied){ // if points were applied on this booking
    this.loyaltyPointsUsed = this.myWalletLoyaltyPoints // then loyalty points used = actual points
    console.log(this.loyaltyPointsUsed)
  }
  this.activatedRoute.paramMap.subscribe(params => {
    this.bookingId = params.get("bookingId")
  })
  this.flightBookingService.completeBooking(parseInt(discount), parseInt(bookingAmount), this.loyaltyPointsEarned, this.bookingId, this.dateOfJourney.substring(1, this.dateOfJourney.length-1))
  .subscribe({
    next: (data) => {
      this.flightBookingService.updateLoyaltyPointsForCustomer(this.bookingId, this.loyaltyPointsUsed, this.loyaltyPointsEarned, this.dateOfJourney.substring(1, this.dateOfJourney.length-1))
      .subscribe({
        next: (data) => {
          this.messageString = "Booking has been confirmed"
          localStorage.removeItem('flight')
          localStorage.removeItem('paymentData')
          this.router.navigateByUrl('/home')
        },
        error: (err) => {
          console.log(err)
        }

      })
    },
    error: (err) => {
      console.log(err);
    }
  })
}

useLoyaltyPoints(points) {
  this.discount += points;
  this.AmountAfterDiscount-=points;
  this.loyaltyPointsApplied=true
}
removeLoyaltyPoints(points) {
  this.discount -= points;
  if(this.discount<0){
    this.discount=0;
  }
  this.AmountAfterDiscount+=points;
  this.loyaltyPointsApplied=false
}

}

// http://localhost:4200/flight/booking/payment/502


