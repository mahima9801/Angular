import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortemployeeComponent } from './sortemployee/sortemployee.component';
@NgModule({
  declarations: [
    SortemployeeComponent
    
  ],
  imports: [
    BrowserModule,
    SortemployeeComponent
  ],
  providers: [],
  bootstrap: [SortemployeeComponent]
})
export class AppModule { }
