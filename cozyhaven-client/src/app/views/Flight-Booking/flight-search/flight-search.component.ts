import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../../service/flight.service';
import { FlightSearch } from '../../../model/flightSearch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, NgIf],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {
  flights: any[] = [];

  flightsSearchForm: FormGroup

  constructor(private flightService : FlightService, private router: Router) {
    this.flightsSearchForm = new FormGroup({
      source: new FormControl('',Validators.required),
      destination: new FormControl('',Validators.required),
      classType: new FormControl('',Validators.required)
    })
  }

  onClick(){
    localStorage.removeItem('flightsData')
    let flightSearch = new FlightSearch(this.flightsSearchForm.value.source, this.flightsSearchForm.value.destination, this.flightsSearchForm.value.classType)
    this.flightService.getFlights(flightSearch)
    .subscribe({
      next: (data) => {
        this.flights = data
        console.log(this.flights)
        localStorage.setItem('flightsData', JSON.stringify(this.flights))
        this.router.navigateByUrl('/fetched-flights')
        console.log(this.flights)
      },
      error: (err) => {
        console.log(err)
      }
    }) 
  }
}
