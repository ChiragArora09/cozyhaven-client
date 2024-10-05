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
  payment: any[] = []
  bookingId: any
  offers: any[] = []
  showOffers: boolean = false
  totalPayment: any = 0
  discount: any = 0
  AmountAfterDiscount: any = 0; 
  loyaltyPointsEarned:any=0 
  messageString: string = ""

  constructor(private activatedRoute: ActivatedRoute, private flightBookingService : FlightBookingService, private router: Router) {}

  ngOnInit() {
    const paymentInfo = localStorage.getItem('paymentData');
    if (paymentInfo){
      this.payment = JSON.parse(paymentInfo);
      let x = 0;
      for(let i=0;i<this.payment.length;i++){
        x += parseInt(this.payment[i].totalAmount)
      }
      this.totalPayment = x;
      this.AmountAfterDiscount = this.totalPayment
    }
    else{
      return;
    }
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

closeOffers(){
  this.showOffers = false;
}

applyOffer(type, discount, loyaltyPoints){
  if(type=="percentage"){
    this.discount = (discount/100)*this.totalPayment
    this.AmountAfterDiscount = this.totalPayment - this.discount
  }else if(type="money"){
    this.discount = discount
    this.AmountAfterDiscount = this.totalPayment - this.discount
  }
  this.loyaltyPointsEarned = loyaltyPoints
  this.showOffers = false
}

removeOffer(){
  this.discount = 0;
  this.AmountAfterDiscount = this.totalPayment
  this.loyaltyPointsEarned = 0
}

completeBooking(discount, bookingAmount) {
  this.activatedRoute.paramMap.subscribe(params => {
    this.bookingId = params.get("bookingId")
  })
  this.flightBookingService.completeBooking(parseInt(discount), parseInt(bookingAmount), this.loyaltyPointsEarned, this.bookingId)
  .subscribe({
    next: (data) => {
      this.messageString = "Booking has been confirmed"
      localStorage.removeItem('flight')
      localStorage.removeItem('paymentData')
      this.router.navigateByUrl('/home')
    },
    error: (err) => {
      console.log(err);
    }
  })

}

}


