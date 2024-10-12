import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightProviderService } from '../../service/flight-provider.service';

@Component({
  selector: 'app-add-offer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-offer.component.html',
  styleUrl: './add-offer.component.css'
})
export class AddOfferComponent {
  flightId: any
  createOfferForm: FormGroup
  stringMessage: string = ""
  showStringMessage: boolean = false

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private flightProviderService: FlightProviderService) {
    this.createOfferForm = new FormGroup({
      description: new FormControl('',Validators.required),
      offerCondition: new FormControl('',Validators.required),
      offerDiscount: new FormControl('',Validators.required),
      offerType: new FormControl('',Validators.required),
      loyaltyPoints: new FormControl('',Validators.required),
    });
  }

  createOffer(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    let data = {
      description: this.createOfferForm.value.description,
      offerType: this.createOfferForm.value.offerType,
      offerDiscount: this.createOfferForm.value.offerDiscount,
      offerCondition: this.createOfferForm.value.offerCondition,
      loyaltyPoints: this.createOfferForm.value.loyaltyPoints,
    }
    console.log(data);
    this.flightProviderService.createOffer(this.flightId, data)
    .subscribe({
      next: (data) => {
        this.stringMessage = "Offer Created successfully"
        this.showStringMessage = true
        this.createOfferForm.reset()
        console.log(data)
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
