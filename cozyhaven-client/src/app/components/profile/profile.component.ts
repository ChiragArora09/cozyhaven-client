import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  fullname: string
  contactNumber: string
  email: string
  address: string
  idType: string
  idNumber: string
  profilePicture: string

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getCustomerInfo()
    .subscribe({
      next: (data:any) => {
        this.fullname=data.fullname;
        this.address=data.address
        this.email=data.email
        this.contactNumber=data.contactNumber
        this.idType=data.idType
        this.idNumber=data.idNumber
        this.profilePicture=data.profilePicture
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  

onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
        this.profilePicture = file.name;
    }
}

onSubmit() {
    console.log(this.contactNumber);

}

}
