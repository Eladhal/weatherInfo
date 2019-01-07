import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../Models/weatherInfo';
import {ApiServiceService} from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DbApiService {
  cities:string[] = ["Tel-Aviv","Haifa","Netanya"];

  constructor(private http: HttpClient,private apiService: ApiServiceService) { }

  public getJSON(): Observable<any[]> {
    return this.apiService.getDefaultCities(this.cities);
  }
}
