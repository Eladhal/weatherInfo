import { Component, OnInit,OnDestroy } from '@angular/core';
import {WeatherInfo} from 'src/app/Models/weatherInfo';
import {DbApiService} from 'src/app/services/db.service';
import {ApiServiceService} from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedCity:WeatherInfo;
  lstOfCities:WeatherInfo[];
  subSelectedCity:Subscription;
  subsSearchCities: Subscription;
  subGetCitiesFromDb: Subscription;


  constructor(private dbService: DbApiService,private apiService: ApiServiceService){
  }

  ngOnInit() {

    if (this.dbService.getCities.length === 0) {
      this.dbService.getDefaultCities().subscribe(data =>{
        this.lstOfCities = data.map(city => new WeatherInfo(
         city['location']['name'],
         city['current']['temp_c'],
         city['current']['feelslike_c'],
         city['current']['wind_kph'],
        ))
     });
    }

    else{
      this.lstOfCities = this.dbService.getCities();
    }
  
    this.subSelectedCity = this.apiService.getSelectedCity().subscribe(city => { 
      this.selectedCity = city; 
    });

    this.subsSearchCities = this.apiService.getCitiesFromSearch().subscribe(cities => { 
      if (cities.length === 0){
        this.selectedCity = null;
      }
    });


  }

  addSelectedCity(selectedCity:WeatherInfo){
    if (this.lstOfCities.find(c=>c.city === selectedCity.city)){  // prevent from adding same cities
      return;
    }
    this.lstOfCities.splice(-1,1);
    this.lstOfCities.unshift(selectedCity);

    this.dbService.AddCityToUserList(selectedCity);
  }

  ngOnDestroy() {
    this.subSelectedCity.unsubscribe();
  }

}
