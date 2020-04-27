import { Injectable } from '@angular/core';
import { Form } from './form/Form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  sendData(form:Form)
  {
    console.log(form);
  }
}
