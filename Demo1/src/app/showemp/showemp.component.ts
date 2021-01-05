import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  
  employees: any;

  constructor(public service: EmpService) {
    // this.employees = [{empId: 1, empName: 'PASHA', salary: 9999.99, gender: 'M', doj: '01-22-1989', loginId:'PASHA123',password:'PASSWORD'},
    // {empId: 2, empName: 'HARSHA', salary: 8888.88, gender: 'M', doj: '10-12-1985', loginId: 'PASHA123', password: 'PASSWORD'},
    // {empId: 3, empName: 'ARUN', salary: 7777.77, gender: 'M', doj: '11-2-1987', loginId: 'ARUN123', password: 'PASSWORD'},
    // {empId: 4, empName: 'ROJA', salary: 6666.66, gender: 'F', doj: '01-11-1992', loginId: 'ROJA123', password: 'PASSWORD'},
    // {empId: 5, empName: 'RANI', salary: 5555.55, gender: 'F', doj: new Date(), loginId: 'RANI123', password: 'PASSWORD'}];
 
  }

  ngOnInit() {
    this.service.getAllEmployees().subscribe((data: any) => { this.employees = data; console.log(data);});
  }

}
