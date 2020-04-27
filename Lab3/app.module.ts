import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    FormComponent
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
