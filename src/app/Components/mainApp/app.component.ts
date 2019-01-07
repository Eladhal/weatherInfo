import { Component, OnInit,OnDestroy } from '@angular/core';
import {WeatherInfo} from 'src/app/Models/weatherInfo';
import {DbApiService} from 'src/app/services/db.service';
import {ApiServiceService} from 'src/app/services/api.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  welcomeWidth: Number;
  selectedCity:WeatherInfo;
  lstOfCities:WeatherInfo[];
  subSelectedCity:Subscription;
  subsGetCities: Subscription;


  constructor(private dbService: DbApiService,private apiService: ApiServiceService){
  }

  ngOnInit() {
     this.dbService.getJSON().subscribe(data =>{
       this.lstOfCities = data.map(city => new WeatherInfo(
        city['location']['name'],
        city['current']['temp_c'],
        city['current']['feelslike_c'],
        city['current']['wind_kph'],
          '1234'
       ))
    });

    this.subSelectedCity = this.apiService.getSelectedCity().subscribe(city => { 
      this.selectedCity = city; 
    });

    this.subsGetCities = this.apiService.getCities().subscribe(cities => { 
      if (cities.length === 0){
        this.selectedCity = null;
      }
    });


  }

  addSelectedCity(selectedCity:WeatherInfo){
    if (this.lstOfCities.find(c=>c.city === selectedCity.city)){
      return;
    }
    this.lstOfCities.splice(-1,1);
    this.lstOfCities.unshift(selectedCity);
  }

  ngOnDestroy() {
    this.subSelectedCity.unsubscribe();
  }


}
