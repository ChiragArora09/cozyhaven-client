import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-options',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-options.component.html',
  styleUrl: './service-options.component.css'
})
export class ServiceOptionsComponent {

  constructor () {}

}
