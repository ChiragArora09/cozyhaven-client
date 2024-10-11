import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FlightService } from '../../service/flight-stepper.service';
import { FlightService as FlightService1 } from '../../service/flight.service';
import { MessageService } from 'primeng/api';

interface FlightCity {
  id?: number;
  city_id: number;
  arrival: string;
  departure: string;
  distance: number;
  stopNumber: number;
}

@Component({
  selector: 'app-edit-flight-route',
  standalone: true,
  imports: [CommonModule, ButtonModule, DropdownModule, InputNumberModule, InputTextModule, DividerModule, ToastModule, ReactiveFormsModule, RouterLink],
  providers: [MessageService],
  templateUrl: './edit-flight-route.component.html',
  styleUrl: './edit-flight-route.component.css'
})
export class EditFlightRouteComponent {
    flightId: any;
    flightCitiesForm: FormGroup;
    cities: any[] = [];

    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private flightService: FlightService,
      private flightService1: FlightService1
    ) { }

    ngOnInit(): void {  
      // Initialize the form
      this.initForm();
  
      // Load cities (for dropdown options)
      this.loadCities();
  
      // Load existing flight cities
      this.loadFlightCities();
    }

      // Initialize the form
  initForm() {
    this.flightCitiesForm = new FormGroup({
      cities: new FormArray([])
    });
  }

  // Getter for cities FormArray
  get citiesArray(): FormArray {
    return this.flightCitiesForm.get('cities') as FormArray;
  }

  // Create a flight city FormGroup
  createCityGroup(cityData: any = {}): FormGroup {
    console.log(cityData)
    return new FormGroup({
      id: new FormControl(cityData.id || null), // Optional: for existing cities
      city_id: new FormControl(cityData.city_id || null, Validators.required),
      arrival: new FormControl(cityData.arrival || '', Validators.required),
      departure: new FormControl(cityData.departure || '', Validators.required),
      distance: new FormControl(cityData.distance || null, [Validators.required, Validators.min(0)]),
      stop_number: new FormControl(cityData.stopNumber || null, [Validators.required, Validators.min(0)])
    });
  }

  // Add a new city
  addCity(cityData?: any) {
    this.citiesArray.push(this.createCityGroup(cityData));
  }

  // Remove a city
  removeCity(index: number) {
    if (this.citiesArray.length > 1) {
      this.citiesArray.removeAt(index);
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

  loadFlightCities() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.flightService1.getRoute(this.flightId)
    .subscribe({
      next: (data) => {
        console.log(data)
          if (data && data.length) {
            data.forEach(city => {
              const transformedCity: FlightCity = {
                id: city.id,
                city_id: city.city.id, // Extract city.id
                arrival: city.arrival,
                departure: city.departure,
                distance: city.distance,
                stopNumber: city.stopNumber // Ensure consistent naming
              };
              this.addCity(transformedCity);
            });
          } else {
            this.addCity();
          }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  onSubmit() {
    if (this.flightCitiesForm.invalid) {
      this.showError('Please correct the errors in the form.');
      this.markAllAsTouched();
      return;
    }

    const flightCitiesData: any[] = this.flightCitiesForm.value.cities;
    console.log(flightCitiesData)

    // this.flightService.updateFlightCities(this.flightId, payload).subscribe(
    //   response => {
    //     this.showSuccess('Flight cities updated successfully.');
    //     this.router.navigate(['/flights']); // Navigate to flight list or another appropriate page
    //   },
    //   error => {
    //     this.showError('Failed to update flight cities.');
    //   }
    // );
  }

  // Mark all form controls as touched to trigger validation messages
  markAllAsTouched() {
    this.flightCitiesForm.markAllAsTouched();
    this.citiesArray.controls.forEach(control => control.markAllAsTouched());
  }

  // Display success message
  showSuccess(detail: string) {
    console.log(detail)
  }

  // Display error message
  showError(detail: string) {
    console.log(detail)
  }

}
