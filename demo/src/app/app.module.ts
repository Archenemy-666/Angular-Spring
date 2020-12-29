import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './app/login/login.component';
import { ShowempComponent } from './showemp/showemp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ShowempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
