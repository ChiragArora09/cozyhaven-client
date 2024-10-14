import { Component } from '@angular/core';
import { FlightProviderSidebarComponent } from '../../../components/flight-provider-sidebar/flight-provider-sidebar.component';

@Component({
  selector: 'app-flight-provider',
  standalone: true,
  imports: [FlightProviderSidebarComponent],
  templateUrl: './flight-provider.component.html',
  styleUrl: './flight-provider.component.css'
})
export class FlightProviderComponent {

}
