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
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ShowempComponent,
    ExperiencePipe,
    GenderPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
