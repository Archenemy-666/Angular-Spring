import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  age : number;
  name : string ;
  salary : number ;
  hobbies : any; // array of any 
  address : any ;
  message : string;

  constructor() { 
    this.age = 20 ;
    this.name = 'sid' ;
    this.salary = 2000000 ;
    this.hobbies = [' basketball ' , ' art ' , ' movie critique '];
    this.address = {doorNo:' 10-10 ' , street : ' b-36 ' , colony : ' d.d.colony '};
  }

  ngOnInit(): void {
  }
  showMessage() : void {
    alert('show method is working..')
    console.log(this.message)
  }

}
