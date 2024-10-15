import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlightService } from '../../service/flight.service';

@Component({
  selector: 'app-my-flight-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './my-flight-card.component.html',
  styleUrl: './my-flight-card.component.css'
})
export class MyFlightCardComponent {
  @Input() flight : any

  constructor(private flightService: FlightService) {}

  deleteFlight(flightId:any){
    this.flightService.deleteFlight(flightId)
    .subscribe({
      next: (data) => {
        window.location.reload()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
