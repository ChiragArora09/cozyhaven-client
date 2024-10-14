import { Component } from '@angular/core';
import { FlightProviderSidebarComponent } from '../flight-provider-sidebar/flight-provider-sidebar.component';

@Component({
  selector: 'app-flight-provider-stops',
  standalone: true,
  imports: [FlightProviderSidebarComponent],
  templateUrl: './flight-provider-stops.component.html',
  styleUrl: './flight-provider-stops.component.css'
})
export class FlightProviderStopsComponent {

}
