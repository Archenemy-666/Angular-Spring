import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './app/login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExperiencePipe} from './experience.pipe';
import { GenderPipe } from './gender.pipe';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { RouterModule, Routes } from '@angular/router';


const appRoot:Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'registration' , component : RegisterComponent},
  {path : 'products' , component : ProductComponent},
  {path : 'employee' , component : ShowempComponent}
] ;


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ShowempComponent,
    ExperiencePipe,
    GenderPipe,
    RegisterComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot)
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
