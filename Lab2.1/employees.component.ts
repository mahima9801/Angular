import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private id:any;
  private name:any;
  private salary:any;
  private depart:any;

  status:boolean=false;
  result:string;

  constructor() { }

  ngOnInit(): void {
  }

  employees:Array<{id:any,name:any,salary:any,depart:any;}>=[
    {id:1001,name:"rohan",salary:25000,depart:"Java"},
    {id:1002,name:"sakshi",salary:20000,depart:"BI"},
    {id:1003,name:"tarun",salary:30000,depart:".Net"}
  ]

  save(arg1:any,arg2:any,arg3:any,arg4:any){
    this.employees.push({id:(<HTMLInputElement>arg1).value,name:(<HTMLInputElement>arg2).value,salary:(<HTMLInputElement>arg3).value,depart:(<HTMLInputElement>arg4).value});
    this.status=true;
    if(this.status==true)
    {
      this.result="Data Inserted";
    }
    else{
      this.result="";
    }
  }

  delete(arg1){
    console.log("Delete");
    for(let i=0;i<this.employees.length;i++){
      if(i==arg1){
      this.employees.pop();
      this.result="Data Deleted";
    }
  }
  }

  private nid:any;
  private nname:any;
  private nsal:any;
  private ndep:any;

  update(id:any,name:any,salary:any,depart:any)
  {
    this.nid=id;
    this.nname=name;
    this.nsal=salary;
    this.ndep=depart;


  }

  editrow(id:any,name:any,salary:any,depart:any)
  {
    for(let i=0;i<this.employees.length;i++)
    {
      let em=this.employees[i];
      if(em.id==id)
      {
        console.log(name);
        this.employees.splice(i,1);
        this.employees.push({id,name,salary,depart});
        console.log(em.name);
        break;
      }
    }
  }
}