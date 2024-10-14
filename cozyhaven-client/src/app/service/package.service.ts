import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PackageSearch } from '../model/packageSearch.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  getPackages: any;

  constructor(private http:HttpClient) { }

  getPackage(obj:PackageSearch):Observable<any>{
    return this.http.post('http://localhost:8082/package/search',obj ,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      })
    }
  }
