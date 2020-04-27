import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees/employees.component';
@NgModule({
  declarations: [
    EmployeesComponent
    
  ],
  imports: [
    BrowserModule,
    EmployeesComponent
  ],
  providers: [],
  bootstrap: [EmployeesComponent]
})
export class AppModule { }
