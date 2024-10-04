import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class AuthGuard  implements CanActivate {

  constructor(private router: Router, private userService: UserService){}

  canActivate(): boolean{

     let status =  this.userService.isUserAutheticated();
     if(status == false){
      this.router.navigateByUrl("**");
    } 
    return status; 
  }

}
