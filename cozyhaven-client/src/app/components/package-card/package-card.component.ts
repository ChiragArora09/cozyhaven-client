import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css'
})
export class PackageCardComponent {

}
