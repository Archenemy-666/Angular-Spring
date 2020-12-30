import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  showRegister(registerForm) : void {
    alert(" you are registered");
    return console.log(registerForm.value);
  }

}
