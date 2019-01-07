import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './Components/mainApp/app.component';
import { NavbarComponent } from '../app/Components/navbar/navbar.component';
import { WeatherComponent } from '../app/Components/weather/weather.component';
import { WelcomeComponent } from '../app/Components/welcome/welcome.component';
import {DbApiService} from 'src/app/services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
