import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExperiencePipe } from './experience.pipe';
import { GenderPipe } from './gender.pipe';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { EmpbyidComponent } from './empbyid/empbyid.component';
 

const appRoot: Routes = [{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'register', canActivate:[AuthGuard], component: RegisterComponent},
{path: 'employees', canActivate:[AuthGuard], component: ShowempComponent},
{path: 'empbyid', canActivate:[AuthGuard], component: EmpbyidComponent},
{path: 'products', canActivate:[AuthGuard], component: ProductComponent}];

@NgModule({
  declarations: [
    AppComponent,  // components
    TestComponent,
    LoginComponent, ShowempComponent, ExperiencePipe, GenderPipe, ProductComponent, HeaderComponent, FooterComponent, RegisterComponent, EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    // modules
    RouterModule.forRoot(appRoot),
    HttpClientModule
  ],
  providers: [],  // service
  bootstrap: [AppComponent]
})
export class AppModule { }
