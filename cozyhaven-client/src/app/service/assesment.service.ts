
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssesmentService {

    constructor(private http:HttpClient){}

    onGet():Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts')

    }

    onClickButton(id:any):Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')

    }

}