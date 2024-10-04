import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  email: string='admin@my-hospital.com'; 

  constructor(private router: Router){
    localStorage.clear();
  }

  login(){
    this.router.navigateByUrl(''); 
  }

}
