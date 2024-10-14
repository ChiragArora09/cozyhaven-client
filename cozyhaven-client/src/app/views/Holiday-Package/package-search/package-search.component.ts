import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { PackageService } from '../../../service/package.service';
import { PackageSearch } from '../../../model/packageSearch.model';

@Component({
  selector: 'app-package-search',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf,ReactiveFormsModule,RouterLink],
  templateUrl: './package-search.component.html',
  styleUrl: './package-search.component.css'
})
export class PackageSearchComponent implements OnInit{

  packages:any[]=[];
  packageSearchForm:FormGroup
  packageSearch:PackageSearch
  constructor(private packageService:PackageService,private router:Router){}
  
  ngOnInit(): void {
    this.packageSearchForm=new FormGroup({
      fromLocation:new FormControl('',Validators.required),
      toLocation:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      numDays:new FormControl('',Validators.required),
      numGuests:new FormControl('',Validators.required)
    })
     this.packageSearch=new PackageSearch(this.packageSearchForm.value.fromLocation,this.packageSearchForm.value.toLocation,this.packageSearchForm.value.type,this.packageSearchForm.value.numDays,this.packageSearchForm.value.numGuests)
    
    throw new Error('Method not implemented.');
  }

  

  onClick(){
   //let packageSearch=new PackageSearch(this.packageSearchForm.value.fromLocation,this.packageSearchForm.value.toLocation,this.packageSearchForm.value.type,this.packageSearchForm.value.numDays,this.packageSearchForm.value.numGuests)
   this.packageService.getPackages(this.packageSearch).subscribe({
    next:(data)=>{
      this.packages=data
      console.log(this.packages)
      this.router.navigateByUrl('/package-card')
      console.log(this.packages)
    },
    error:(err)=>{
      console.log(err)
    }
   })
  }
}
