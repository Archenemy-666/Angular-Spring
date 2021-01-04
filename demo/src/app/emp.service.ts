import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// providing variable(boolean typr ) to provide access from auth guard 
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  public isUserLogged : boolean ;

  constructor(public httpClient : HttpClient) {
    this.isUserLogged = false ;
   }

   setUserLoggedIn(): void{
     this.isUserLogged = true ;
   }

   // when user clicks logout 
   setUserLoggedOut(): void {
     this.isUserLogged = false ;
   }

   getUserLogged(): any{
     return this.isUserLogged;
   }

   getAllCountries(): any{
     return this.httpClient.get('https://restcountries.eu/rest/v2/all');
   }
}
