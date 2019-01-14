import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.model';

import { AppComponent } from './Components/mainApp/app.component';
import { NavbarComponent } from '../app/Components/navbar/navbar.component';
import { WeatherComponent } from '../app/Components/weather/weather.component';
import { WelcomeComponent } from '../app/Components/welcome/welcome.component';
import {DbApiService} from 'src/app/services/db.service';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { LogInComponent } from 'src/app/Components/log-in/log-in.component';
import { SignUpComponent } from 'src/app/Components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    WelcomeComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
