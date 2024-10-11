import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../service/flight-stepper.service';
import { CommonModule, NgIf } from '@angular/common';

import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-stepper',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule, StepsModule, ButtonModule, InputTextModule, DropdownModule, InputNumberModule, DividerModule, InputTextareaModule, ToastModule],
  providers: [MessageService],
  templateUrl: './flight-stepper.component.html',
  styleUrl: './flight-stepper.component.css'
})
export class FlightStepperComponent {
  [x: string]: any;
  items: any[];
  activeIndex: number = 0;

  flightDetailsForm: FormGroup;
  flightCitiesForm: FormGroup;
  flightClassesForm: FormGroup;
  flightSeatsForm: FormGroup;

  serviceProviders: any;
  cities: any[] = [];
  flightClassesList: any[] = []

  flightId:any
  flightClassId:any

  constructor(private flightService: FlightService, private router:Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Flight Details' },
      { label: 'Flight Route' },
      { label: 'Flight Classes' },
      { label: 'Flight Seats' }
    ];

    this.initFlightDetailsForm();
    this.initFlightCitiesForm();
    this.initFlightClassesForm();
    this.initFlightSeatsForm();

    this.loadCities();
  }

  // Initialize Flight Details Form
  initFlightDetailsForm() {
    this.flightDetailsForm = new FormGroup({
      description: new FormControl(''),
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    });
  }

  // Initialize Flight Cities Form
  initFlightCitiesForm() {
    this.flightCitiesForm = new FormGroup({
      cities: new FormArray([this.createCityGroup()])
    });
  }

  // Create a City FormGroup
  createCityGroup(): FormGroup {
    return new FormGroup({
      arrival: new FormControl('', Validators.required),
      departure: new FormControl('', Validators.required),
      distance: new FormControl(null, [Validators.required, Validators.min(0)]),
      stop_number: new FormControl(null, [Validators.required, Validators.min(0)]), 
      city_id: new FormControl(null, Validators.required)
    });
  }

  // Add City
  addCity() {
    (this.flightCitiesForm.get('cities') as FormArray).push(this.createCityGroup());
  }

  // Remove City
  removeCity(index: number) {
    const citiesArray = this.flightCitiesForm.get('cities') as FormArray;
    if (citiesArray.length > 1) {
      citiesArray.removeAt(index);
    }
  }

  // Initialize Flight Classes Form
  initFlightClassesForm() {
    this.flightClassesForm = new FormGroup({
      classes: new FormArray([this.createClassGroup()])
    });
  }

  // Create a Class FormGroup
  createClassGroup(): FormGroup {
    return new FormGroup({
      type: new FormControl(null, Validators.required)
    });
  }

  // Add Class
  addClass() {
    (this.flightClassesForm.get('classes') as FormArray).push(this.createClassGroup());
  }

  // Remove Class
  removeClass(index: number) {
    const classesArray = this.flightClassesForm.get('classes') as FormArray;
    if (classesArray.length > 1) {
      classesArray.removeAt(index);
    }
  }

  // Initialize Flight Seats Form
  initFlightSeatsForm() {
    this.flightSeatsForm = new FormGroup({
      seats: new FormArray([this.createSeatGroup()])
    });
  }

  // Create a Seat FormGroup
  createSeatGroup(): FormGroup {
    return new FormGroup({
      flight_class_id: new FormControl(null, Validators.required),
      flight_seat_type: new FormControl(null, Validators.required),
      seat_number: new FormControl('', Validators.required)
    });
  }

  // Add Seat
  addSeat() {
    (this.flightSeatsForm.get('seats') as FormArray).push(this.createSeatGroup());
  }

  // Remove Seat
  removeSeat(index: number) {
    const seatsArray = this.flightSeatsForm.get('seats') as FormArray;
    if (seatsArray.length > 1) {
      seatsArray.removeAt(index);
    }
  }

  loadCities() {
    this.flightService.getCities()
    .subscribe({
      next: (data) => {
        this.cities = data
        console.log(this.cities)
      },
      error: (err) => {console.log(err)}

    });
  }

  // Navigation Methods
  nextStep() {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
  }

  prevStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  // Submission Method
  onSubmit() {
    if(this.flightDetailsForm.invalid || this.flightCitiesForm.invalid || this.flightClassesForm.invalid || this.flightSeatsForm.invalid) {
      console.log('Complete all required fields before submitting');
      return;
    }

    const info = {
      flight: this.flightDetailsForm.value,
      cities: this.flightCitiesForm.value.cities,
      classes: this.flightClassesForm.value.classes,
      seats: this.flightSeatsForm.value.seats
    };

    // Send data to backend
    this.flightService.createFlight(info.flight)
    .subscribe({
      next: (data) => {
        this.flightId = data.id
        console.log(this.flightId)
        this.flightService.createRoute(info.cities, this.flightId)
        .subscribe({
          next: (data) => {
              let i=1;
              for(let fc of info.classes){
                console.log(fc)
                console.log("i= " + i)
                this.flightService.addClassesAndSeats(fc, this.flightId)
                .subscribe({
                  next: (data) => {
                    this.flightClassId = data.id
                    console.log(this.flightClassId)
                    let flightSeatsForThisClass = info.seats.filter(seat => seat.flight_class_id === i);
                    console.log(flightSeatsForThisClass)
                    let reducedSeats = flightSeatsForThisClass.map(seat => {
                      return {"flightSeatType":seat.flight_seat_type, "seatNumber":seat.seat_number};
                    });
                    console.log(reducedSeats)
                    this.flightService.addSeats(reducedSeats, this.flightClassId).subscribe()
                    i++;
                  },
                  error: (err) => {
                    console.log(err)
                  }
                })
              }
              this.router.navigateByUrl('/my-flights')
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  // Reset Forms
  resetForms() {
    this.flightDetailsForm.reset();
    // Reset FormArrays
    this.flightCitiesForm.setControl('cities', new FormArray([this.createCityGroup()]));
    this.flightClassesForm.setControl('classes', new FormArray([this.createClassGroup()]));
    this.flightSeatsForm.setControl('seats', new FormArray([this.createSeatGroup()]));
  }

  // Check if current step is valid
  isCurrentStepValid(): boolean {
    switch (this.activeIndex) {
      case 0:
        return this.flightDetailsForm.valid;
      case 1:
        return this.flightCitiesForm.valid;
      case 2:
        return this.flightClassesForm.valid;
      case 3:
        return this.flightSeatsForm.valid;
      default:
        return false;
    }
  }

  // Getter Methods for Form Arrays
  get citiesArray(): FormArray {
    return this.flightCitiesForm.get('cities') as FormArray;
  }

  get classesArray(): FormArray {
    return this.flightClassesForm.get('classes') as FormArray;
  }

  get seatsArray(): FormArray {
    return this.flightSeatsForm.get('seats') as FormArray;
  }

  getFlightClassOptions(){
    return this.flightClassesForm.value.classes?.map((cls, idx) => ({
      label: cls.type,
      value: idx+1
    }))
  }
}
