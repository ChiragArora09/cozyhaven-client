import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FlightService } from '../../service/flight.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FlightProviderService } from '../../service/flight-provider.service';

@Component({
  selector: 'app-my-flight-info',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, NgClass, TableModule, TagModule, CommonModule, ButtonModule, DataViewModule, RatingModule, FormsModule],
  templateUrl: './my-flight-info.component.html',
  styleUrl: './my-flight-info.component.css'
})
export class MyFlightInfoComponent implements OnInit {
  selectedSection = 'route';
  flightId:any
  flightRoute: any[] = []
  flightClassesAndSeats: any[] = []
  flightOffers: any[] = []
  flightReviews: any[] = []

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.flightService.getRoute(this.flightId)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightRoute=data
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.flightService.getSeatsAndClasses(this.flightId)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightClassesAndSeats=data
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.flightService.getFlightOffers(this.flightId)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightOffers=data
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.flightService.getFlightReviews(this.flightId)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightReviews=data
      },
      error: (err) => {
        console.log(err)
      }
    })
    
   
  }

  constructor(private flightService: FlightService, private activatedRoute: ActivatedRoute, private router: Router, private flightProviderService: FlightProviderService) {}

  selectSection(section: string) {
    this.selectedSection = section;
  }

  navigateToEditPage(flightId:any){
    this.router.navigate(['/edit-flight-route', flightId]);
  }

  navigateToAddOffer() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.router.navigate(['/add-offer', this.flightId]);
  }

  navigateToEditOffer(offerId:any) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.flightId = params.get("flightId")
    })
    this.router.navigate(['/edit-offer', this.flightId, offerId]);
  }

  changeOfferStatus(offerId:any) {
    this.flightProviderService.changeOfferStatus(offerId)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.flightService.getFlightOffers(this.flightId)
        .subscribe({
          next: (data) => {
            console.log(data)
            this.flightOffers=data
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
