import { Component, OnInit } from '@angular/core';
import { SortPipe } from 'd:/Angular-App1/second-app/src/app/sort.pipe';
@Component({
  selector: 'app-sortemployee',
  templateUrl: './sortemployee/sortemployee.component.html'
})
export class SortemployeeComponent implements OnInit{
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private sortPipe: SortPipe) {
    console.log("order by digit");
    console.log(this.sortPipe.transform(this.items, 'digit'));
  } 
  ngOnInit():void{
    
  }

  items = [
    {eid:1001,ename:'Rohan',esal:20000,edept:'JAVA',edateofjoining:'9/1/2012'},
    {eid:1002,ename:'Vivek',esal:17000,edept:'ORAAPS',edateofjoining:'9/2/2018'},
    {eid:1003,ename:'Tarun',esal:18000,edept:'JAVA',edateofjoining:'8/3/2011'},
    {eid:1004,ename:'Arun',esal:23000,edept:'ORAAPS',edateofjoining:'1/12/2018'},
  ];
  order = "eid";
  reverse = false;

}
