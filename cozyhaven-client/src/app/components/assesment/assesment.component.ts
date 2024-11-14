import { Component } from '@angular/core';
import { AssesmentService } from '../../service/assesment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assesment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './assesment.component.html',
  styleUrl: './assesment.component.css'
})
export class AssesmentComponent {

  post:any[]=[];
  p:any=null;

  constructor(private assesmentService:AssesmentService){
    this.onGet();
  }

  onGet(){
    this.assesmentService.onGet().subscribe({
      next:(data)=>{
        this.post=data;
        console.log(this.post)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onClick(id:any){
    this.assesmentService.onClickButton(id).subscribe({
      next:(data)=>{
        this.post=data;
        console.log(data);
      }
    })
  }

}
