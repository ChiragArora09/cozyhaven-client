import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: any = ''
  constructor (@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit(): void {
    this.getValueFromLocalStorage();
  }

  getValueFromLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username');
    }
  }

  Logout() {
    localStorage.clear()
    this.router.navigateByUrl('/')
  }

}
