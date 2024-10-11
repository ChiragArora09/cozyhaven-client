import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-flight-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-flight-card.component.html',
  styleUrl: './my-flight-card.component.css'
})
export class MyFlightCardComponent {
  @Input() flight : any

}
