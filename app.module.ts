import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{ FormsModule }from '@angular/forms';
import{ RouterModule}from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';
import { DivComponent } from './div/div.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    DivComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'subtract', component:SubComponent},
      { path:'addition', component:AddComponent},
      { path:'multiplication', component:MulComponent},
      { path:'division', component:DivComponent},
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent},
      
    ])
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
