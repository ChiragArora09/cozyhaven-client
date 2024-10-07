import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile = {
    username: '',
    password: '',
    contact: '',
    address: '',
    email: '',
    fullName: '',
    profilePicture: null
};

onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
        this.profile.profilePicture = file;
    }
}

onSubmit() {
    console.log('Profile updated:', this.profile);
    // Add logic to send updated profile data to the server
}

}
