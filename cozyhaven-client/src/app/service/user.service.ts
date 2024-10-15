import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/user.model";
import { Header } from "primeng/api";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }
    
    getToken(username: any, password:any) : Observable<any> {
      return this.http.post('http://localhost:8082/auth/token', {
        "username":username,
        "password":password
      })
    }
  
    getUserDetails(token: string) : Observable<any> {
      return this.http.get<User>('http://localhost:8082/auth/login', {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
      })
    }

    isUserAutheticated(): boolean{
      let token = localStorage.getItem('token'); 
      return !token?false: true; 
    }

    customerSignup(user:any) {
      console.log(user)
      return this.http.post('http://localhost:8082/customer/add', user)
    }

    serviceProviderSignup(serviceProvider: any){
      console.log(serviceProvider)
      return this.http.post('http://localhost:8082/service-provider/add', serviceProvider)
    }

    getCustomerInfo() {
      const token = localStorage.getItem('token');
      return this.http.get('http://localhost:8082/customer/my-info', {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
      })
    }

    uploadProfilePicture(formData:FormData) :Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.post("http://localhost:8082/customer/image/upload", formData, {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token),
      })
    }

    editCustomerDetails(data:any){
      const token = localStorage.getItem('token');
      return this.http.post("http://localhost:8082/customer/update-my-info", data, {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token),
      })
    }
}