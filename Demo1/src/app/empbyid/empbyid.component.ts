import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.css']
})
export class EmpbyidComponent implements OnInit {

  empId: number;
  employee: any;

  constructor(public service: EmpService) {
    this.empId = 0;
   }

  ngOnInit() {
  }

  getEmpById(): any {
    this.service.getEmpById(this.empId).subscribe((data: any) => {this.employee=data; console.log(data);});
  }

}
