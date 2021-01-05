import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList: any;

  constructor(public service: EmpService) { }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {this.countryList = data; console.log(data);});
  }

  registerUser(regForm: any) : void {
    console.log(regForm);

    this.service.register(regForm).subscribe((result: any) => console.log(result));
  }

}
