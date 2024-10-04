import { NgFor, NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent {
@Input() hotel:any;
}
