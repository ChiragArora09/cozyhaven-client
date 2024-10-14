import { Component } from '@angular/core';
import { FlightStepperComponent } from '../flight-stepper/flight-stepper.component';
import { FlightProviderSidebarComponent } from '../flight-provider-sidebar/flight-provider-sidebar.component';

@Component({
  selector: 'app-add-flight',
  standalone: true,
  imports: [FlightStepperComponent, FlightProviderSidebarComponent],
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})
export class AddFlightComponent {

}
