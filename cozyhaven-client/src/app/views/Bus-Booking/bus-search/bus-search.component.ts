import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-bus-search',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.css'
})
export class BusSearchComponent {
  busSearchForm: FormGroup

  constructor() {
    this.busSearchForm = new FormGroup({
      source: new FormControl('',Validators.required),
      destination: new FormControl('',Validators.required)
    })
  }

}
