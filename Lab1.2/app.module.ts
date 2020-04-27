import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServeComponent } from './serve/serve.component';
@NgModule({
  declarations: [
    ServeComponent
    
  ],
  imports: [
    BrowserModule,
    ServeComponent
  ],
  providers: [],
  bootstrap: [ServeComponent]
})
export class AppModule { }
