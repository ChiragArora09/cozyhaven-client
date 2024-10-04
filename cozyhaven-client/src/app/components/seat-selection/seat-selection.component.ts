import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.css'
})
export class SeatSelectionComponent {
  @Input() seats: any[] = [];
  selectedSeats: any[] = [];
  seatInfo: boolean = false
  hoveredSeat:any

  selectSeat(seat: any): void {
    if(!seat.selected){
      seat.selected = true
      this.selectedSeats.push(seat.id)
    }else{
      seat.selected = false;
      const index = this.selectedSeats.indexOf(seat.id);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    }
    console.log(this.selectedSeats)
  }

  showDetails(seat: any) {
    this.seatInfo = true
    this.hoveredSeat = seat
  }

  hideDetails() {
    this.seatInfo = false
  }

}
