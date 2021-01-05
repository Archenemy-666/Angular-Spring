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
import { AuthGuard } from './auth.guard';
import { HttpClientModule} from '@angular/common/http';
import { EmpbyidComponent } from './empbyid/empbyid.component';

const appRoot:Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'registration' , component : RegisterComponent},
  {path : 'products' ,canActivate : [AuthGuard] , component : ProductComponent},
  {path : 'employee' ,canActivate : [AuthGuard] , component : ShowempComponent},
  {path : 'empbyid' ,canActivate : [AuthGuard] , component : EmpbyidComponent}
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
    FooterComponent,
    EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
