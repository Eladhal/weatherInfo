import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { WeatherInfo } from 'src/app/Models/weatherInfo';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Output() addSelectedCity:EventEmitter<WeatherInfo>= new EventEmitter<WeatherInfo>();
  @Input() weatherInfo: WeatherInfo;
  @Input() selectedCity :boolean;
  Image:any;

  constructor() { }

  ngOnInit() {
  }
  addSelected(){
    this.addSelectedCity.emit(this.weatherInfo);
  }

}
