import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : string ;
  userName : any ;
  emailId : any ;
  password : any;
  contact : number ;

  constructor(public empService : EmpService) { }

  countryList : any ;

  ngOnInit(): void {
    this.empService.getAllCountries().subscribe((data:any) => {this.countryList = data; console.log(data);});
  }
  showRegister(registerForm) : void {
    alert(" you are registered");
    return console.log(registerForm.value);
  }

}
