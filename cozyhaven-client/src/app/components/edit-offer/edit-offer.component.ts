import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightProviderService } from '../../service/flight-provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-offer.component.html',
  styleUrl: './edit-offer.component.css'
})
export class EditOfferComponent implements OnInit {
  offerDescription: any
  offerMinimumAmount: any
  offerDiscount: any
  offerType: any
  offerLoyaltyPoints: any
  offerId: any
  flightId: any

  constructor(private flightProviderService: FlightProviderService, private activatedRoute: ActivatedRoute, private router: Router ) {}
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.offerId = params.get("offerId")
    })
    this.flightProviderService.getOfferDetails(this.offerId)
    .subscribe({
      next: (data) => {
        this.offerDescription = data.description
        this.offerMinimumAmount = data.offerCondition
        this.offerDiscount = data.offerDiscount
        this.offerType = data.offerType
        this.offerLoyaltyPoints = data.loyaltyPoints
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editOffer(){
    let data = {
      description: this.offerDescription,
      offerType: this.offerType,
      offerDiscount: this.offerDiscount,
      offerCondition: this.offerMinimumAmount,
      loyaltyPoints: this.offerLoyaltyPoints,
    }
    this.flightProviderService.editOffer(this.offerId, data)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.offerDescription = data.description
        this.offerMinimumAmount = data.offerCondition
        this.offerDiscount = data.offerDiscount
        this.offerType = data.offerType
        this.offerLoyaltyPoints = data.loyaltyPoints
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  cancelCreatingOffer(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.router.navigate(['/my-flight-info', this.flightId]);
  }

}
