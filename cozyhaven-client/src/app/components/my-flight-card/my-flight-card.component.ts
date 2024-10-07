import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-flight-card',
  standalone: true,
  imports: [],
  templateUrl: './my-flight-card.component.html',
  styleUrl: './my-flight-card.component.css'
})
export class MyFlightCardComponent {
  @Input() flight : any

}
