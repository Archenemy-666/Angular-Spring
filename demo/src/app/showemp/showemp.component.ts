import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  

  employees : any;
 
  constructor() {

    this.employees = [{empId : "1" , empName : "sid1" , salary : "123" , gender : "male" , doj : "12/12/12" , loginId : "sid1" , password: "sid1"},
    {empId : "2" , empName : "sid2" , salary : "1234" , gender : "male" , doj : "12/12/13" , loginId : "sid2" , password: "sid2"},
    {empId : "3" , empName : "sid3" , salary : "12345" , gender : "male" , doj : "12/12/14" , loginId : "sid3" , password: "sid3"}]
  }
  ngOnInit(): void {
  }

  }

