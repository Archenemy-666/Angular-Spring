import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { EmpService } from 'src/app/emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId : string ;
  password : string ;
  
  constructor(public router : Router , public empService : EmpService) {}
   

  ngOnInit(): void {
  }

  showDetails() : void {
    alert('show method is working..')
    console.log(this.loginId)
    console.log(this.password)
  }
  submitLoginForm(loginForm):void{
    console.log(loginForm.value);
    if(loginForm.value.loginId === "admin" && loginForm.value.password === 'admin'){
      this.router.navigate(['products']);
      this.empService.setUserLoggedIn();
      
      
    }
  }


}
