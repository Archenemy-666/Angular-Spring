import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(public router: Router, public empService: EmpService) {    //Dependency Injection for Router
    this.user = {loginId: '', password: ''};
   }

  ngOnInit() {
  }

  loginSubmit() {
    console.log('Data Recieved : ' + this.user.loginId);
  }

  submitLoginForm(loginForm: any) {       //validateUser()
    console.log(loginForm);

   if(loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.empService.setUserLoggedIn();    //return true;
      this.router.navigate(['products']);
    } 
  }
}
