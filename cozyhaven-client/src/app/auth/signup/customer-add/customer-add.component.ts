import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  customerSignupForm: FormGroup;

  constructor() {
    this.customerSignupForm= new FormGroup({
      username: new FormControl('',Validators.required),
      fullname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      profilePicture: new FormControl()
    })
  }

  onSignup(){
    console.log("username" + this.customerSignupForm.value.username)
    console.log("fullname" + this.customerSignupForm.value.fullname)
    console.log("email" + this.customerSignupForm.value.email)
    console.log("password" + this.customerSignupForm.value.password)
    console.log("address" + this.customerSignupForm.value.address)
    console.log("phoneNumber" + this.customerSignupForm.value.phoneNumber)
    console.log("profilePicture" + this.customerSignupForm.value.profilePicture)
  }

}
