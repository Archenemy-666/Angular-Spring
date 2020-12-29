import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId : string ;
  password : string ;
  constructor() {}
   

  ngOnInit(): void {
  }

  showDetails() : void {
    alert('show method is working..')
    console.log(this.loginId)
    console.log(this.password)
  }


}
