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
  uploadedProfilePicture: File

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getCustomerInfo()
    .subscribe({
      next: (data:any) => {
        console.log(data)
        this.fullname=data.fullname;
        this.address=data.address
        this.email=data.email
        this.contactNumber=data.contactNumber
        this.idType=data.idType
        this.idNumber=data.idNumber
        this.profilePicture=`/assets/${data.profilePicture}`
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

onFileChange(event: any) {
    this.uploadedProfilePicture = event.target.files[0]
    console.log(this.uploadedProfilePicture)
    let formData = new FormData();
    formData.set('file',this.uploadedProfilePicture);
    this.userService.uploadProfilePicture(formData)
    .subscribe({
      next: (data) => {
        this.profilePicture= `/assets/${this.uploadedProfilePicture.name}`
        // console.log(this.profilePicture)
      },
      error: (err) => {
        console.log(err)
      }
    })
}

  onSubmit(){
    const data = {
      "fullname": this.fullname,
      "email": this.email,
      "contactNumber": this.contactNumber,
      "address": this.address,
      "idType": this.idType,
      "idNumber": this.idNumber
    }
    this.userService.editCustomerDetails(data)
    .subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
          console.log(err)
      },
    })
  }
}
