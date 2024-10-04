import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-service-provider-add',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule, RouterLink],
  templateUrl: './service-provider-add.component.html',
  styleUrl: './service-provider-add.component.css'
})
export class ServiceProviderAddComponent {
  serviceProviderForm : FormGroup
  isSubmitting: boolean = false
  token: string = ""
  user: any
  message: string = ""

  constructor(private userService: UserService, private router: Router ) {
    this.serviceProviderForm= new FormGroup({
      username: new FormControl('',Validators.required),
      fullname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
      address: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      serviceType: new FormControl('',Validators.required),
      companyName: new FormControl('',Validators.required),
    })
  }

  onSignup() {
    this.isSubmitting = true;
    this.message = '';
    if (this.serviceProviderForm.invalid) {
      return;
    }
    const data = {
      fullName: this.serviceProviderForm.value.fullname,
      email: this.serviceProviderForm.value.email,
      contactNumber: this.serviceProviderForm.value.phoneNumber,
      address: this.serviceProviderForm.value.address,
      companyName: this.serviceProviderForm.value.companyName,
      serviceType: this.serviceProviderForm.value.serviceType,
      user: {
        username: this.serviceProviderForm.value.username,
        password: this.serviceProviderForm.value.password
      },
      verified:"NO"
    }

    this.userService.serviceProviderSignup(data)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.userService.getToken(this.serviceProviderForm.value.username, this.serviceProviderForm.value.password)
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
                switch(this.user.role){
                  case 'ROLE_FLIGHT_SERVICE_PROVIDER':
                    this.router.navigateByUrl('/flight-provider')
                  break;
                  case 'ROLE_HOTEL_SERVICE_PROVIDER':
                    this.router.navigateByUrl('/hotel-provider')
                  break;
                  case 'ROLE_BUS_SERVICE_PROVIDER':
                    this.router.navigateByUrl('/hotel-provider')
                  break;
                }
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

// {
//   "fullName":"Ron",
//   "companyName":"Cozy Haven Hotel",
//   "email":"ron@gmail.com",
//   "contactNumber":"9876543210",
//   "address":"123 Main Street",
//   "profilePicture":"",
//   "serviceType":"HOTEL",
//   "verified":"YES",
//   "user":{
//       "username":"ron",
//       "password":"12345"
//   }
// }