import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeatSelectionComponent } from '../../../components/seat-selection/seat-selection.component';
import { FlightBookingService } from '../../../service/flightBooking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-flight-booking',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf, ReactiveFormsModule, SeatSelectionComponent, NgStyle],
  templateUrl: './confirm-flight-booking.component.html',
  styleUrl: './confirm-flight-booking.component.css'
})
export class ConfirmFlightBookingComponent {
  flight : any
  travelersForm : FormGroup
  flightSeats: any = []
  journeyDate: any = ""
  travellersAdded: boolean = false
  bookingId: any = null
  flightId: any = null
  travellerAddedMessage: string = ""

  constructor(private flightBookingService: FlightBookingService, private activatedRoute: ActivatedRoute) {
    this.travelersForm = new FormGroup({
      travelers: new FormArray([
        new FormGroup({
          name: new FormControl('', [Validators.required, Validators.minLength(2)]),
          age: new FormControl('', [Validators.required, Validators.min(1)]),
          gender: new FormControl('', Validators.required)
        })
      ])
    })

  }

  ngOnInit() {
    const storedFlights = localStorage.getItem('flight');
    if (storedFlights){
      this.flight = JSON.parse(storedFlights);
    } 
  }
  
  get travelers() {
    return (this.travelersForm.get('travelers') as FormArray);
  }

  addTraveler() {
    this.travellersAdded = false
    const travelerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      gender: new FormControl('', Validators.required)
    });
    console.log(travelerFormGroup.value)
    this.travelers.push(travelerFormGroup);
  }

  removeTraveler(index: number) {
    if (this.travelers.length > 1) {
      this.travelers.removeAt(index);
    }
  }

  onSubmit() {
    if (this.travelersForm.valid) {
      this.activatedRoute.paramMap.subscribe(params => {
        this.bookingId = params.get("bookingId")
      })
      this.flightBookingService.addTravellers(this.bookingId, this.travelersForm.get('travelers').value)
      .subscribe({
        next: (data) => {
          this.travellerAddedMessage="Travellers added successfully, please select date and seats"
          this.travellersAdded = true
          
        },
        error: (err) => {console.log(err)}
      })

    } else {
      console.error('Form is invalid');
    }
  }

  onDateChange(e: any) {
    this.journeyDate=e.target.value
    console.log(this.journeyDate)
    localStorage.setItem('journeyDate', JSON.stringify(this.journeyDate))
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookingId = params.get("bookingId")
    })
    this.flightBookingService.getAvailableSeats(this.bookingId, this.flightId, this.journeyDate)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightSeats = data
      },
      error: (err) => {console.log(err)}
    })

  }

}