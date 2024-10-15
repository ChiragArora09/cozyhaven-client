import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
  selector: 'app-hotel-provider',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './hotel-provider.component.html',
  styleUrl: './hotel-provider.component.css'
})
export class HotelProviderComponent {

  constructor(private router:Router){}

  Logout(){
    localStorage.clear()
    this.router.navigateByUrl('/')
  }

}
