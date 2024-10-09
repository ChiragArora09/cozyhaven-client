import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  customerSignupForm: FormGroup;
  message: string = '';
  token: string = ""
  user: any
  isSubmitting: boolean = false

  constructor(private userService: UserService, private router: Router ) {
    this.customerSignupForm= new FormGroup({
      username: new FormControl('',Validators.required),
      fullname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
      address: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      idType: new FormControl('',Validators.required),
      idNumber: new FormControl('',Validators.required),
    })
  }

  onSignup() {
    this.isSubmitting = true;
    this.message = '';
    if (this.customerSignupForm.invalid) {
      return;
    }

    const data = {
      fullname: this.customerSignupForm.value.fullname,
      email: this.customerSignupForm.value.email,
      contactNumber: this.customerSignupForm.value.phoneNumber,
      address: this.customerSignupForm.value.address,
      idType: this.customerSignupForm.value.idType,
      idNumber: this.customerSignupForm.value.idNumber,
      user: {
        username: this.customerSignupForm.value.username,
        password: this.customerSignupForm.value.password
      }
    }

    this.userService.customerSignup(data)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.userService.getToken(this.customerSignupForm.value.username, this.customerSignupForm.value.password)
        .subscribe({
          next: (data) => {
            this.token = data.token
            this.userService.getUserDetails(this.token)
            .subscribe({
              next: (data) => {
                this.user=data
                localStorage.setItem('token',this.token );
                localStorage.setItem('username',this.user.username );
                localStorage.setItem('role',this.user.role );
                this.isSubmitting = false;
                this.router.navigateByUrl('/home')
              },
              error: (err) => {
                this.message = "an error has occured please login now"
                console.log(err)
              }
            })

          },
          error: (err) => {
            this.message = "an error has occured"
            console.log(err)
          }
        })
      },
      error: (err) => {console.log(err)} 
    })
  }
}

/*

address: "Bhopal"
contactNumber: "8273924435"
email: "harry@gmail.com"
fullname: "Harry Potter"
id: 2
idNumber: "@Harry123"
idType: "ADHAAR_CARD"
user => 
id: 5
password: "$2a$10$IVqtkGp6FReTgXdgN6ewN.TaB.PPWoUSiXPu/lkKStiTzTB9WrtDO"
role: "ROLE_CUSTOMER"
username: "harry"
*/