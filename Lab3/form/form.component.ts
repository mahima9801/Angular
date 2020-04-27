import { Component, OnInit } from '@angular/core';
import {  Form } from './Form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  category:string[]=['Grocery','Mobile','Electronics','Cloths'];
  fform:any= new Form(100,'Milk','40','No','Grocery','bigbazaar');

  constructor() { }

  ngOnInit() {
  }
  saveData(formData:any)
  {
    console.log(this.fform);
  }

}