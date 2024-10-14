import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-provider-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './flight-provider-sidebar.component.html',
  styleUrl: './flight-provider-sidebar.component.css'
})
export class FlightProviderSidebarComponent {
  selectedOption:string
  username: any = ''

  ngOnInit(): void {
    this.getValueFromLocalStorage();
  }

  getValueFromLocalStorage(): void {
    this.username = localStorage.getItem('username');
  }

  constructor(private router: Router) {}

  selectOption(option:string){
    if(option==="Dashboard"){
      this.router.navigateByUrl('/flight-provider')  
      this.selectedOption = option
    }else if(option==="Flights"){
      this.router.navigateByUrl('/my-flights')
      this.selectedOption = option
    }else if(option==="Stops"){
      this.router.navigateByUrl('/flight-stops')
      this.selectedOption = option
    }else{
      return;
    }
  }

  Logout() {
    localStorage.clear()
    this.router.navigateByUrl('/')
  }

}
