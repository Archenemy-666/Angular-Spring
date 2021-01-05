import { Component, OnInit } from '@angular/core';
import { componentFactoryName, BoundTextAst } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // variables
  age: number;
  name: string;
  salary: number;
  hobbies: any;
  address: any;

  message: string;

  constructor() {
    this.age = 25;
    this.name = 'JOHN';
    this.salary = 9999.99;
    this.hobbies = ['PLAYING', 'CHATTING', 'ROAMING'];
    this.address = {doorNo: '10-10', street: 'Street1', city: 'Hyderabad'};
  }

  ngOnInit() {
  }

  showMessage(): void {
    alert('show method is called..');
    console.log(this.message);
  }
}
