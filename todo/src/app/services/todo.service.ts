import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {
        id : 1 ,
        title : 'Todo one',
        completed : true
      },
      {
        id : 2 ,
        title : 'Todo two',
        completed : true 
      },
      {
        id : 3 ,
        title : 'Todo three',
        completed : false 
      }

      
    ]

  }
}
