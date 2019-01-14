import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, Subject,forkJoin} from 'rxjs';
import {WeatherInfo} from 'src/app/Models/weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private subjectSelectedCity = new Subject<WeatherInfo>();
  private subjectCities = new Subject<string[]>();

  constructor(private http: HttpClient) { }

  searchCities(term:string){
    if (!term){
      this.subjectCities.next([]);
      return;
    }

    const params = new HttpParams().set('q', term);
    this.http.get<any[]>
        ('http://api.apixu.com/v1/search.json?key=43c1bdb61d85452b803192306190301',{params})
        .subscribe(data => {
          this.subjectCities.next(data.map(res=>res.name.split(',')[0]).slice(0,5));         
        })
      }

  getCitiesFromSearch(): Observable<string[]> {
      return this.subjectCities.asObservable();
  }

  citySelected(selected:string){
        const params = new HttpParams().set('q', selected);
        this.http.get<any>
            ('http://api.apixu.com/v1/current.json?key=43c1bdb61d85452b803192306190301',{params})
            .subscribe(data => {                    
            this.subjectSelectedCity.next(new WeatherInfo(
              data['location']['name'],
              data['current']['temp_c'],
              data['current']['feelslike_c'],
              data['current']['wind_kph'],
              '1234'
            ))       
        })
  }

  getSelectedCity(): Observable<WeatherInfo> {
          return this.subjectSelectedCity.asObservable();
  }

  getDefaultCities(cities:string[]):Observable<any[]>{
    const params = cities.map(city => new HttpParams().set('q', city));
    return forkJoin(
      this.http.get('http://api.apixu.com/v1/current.json?key=43c1bdb61d85452b803192306190301',{params:params[0]}),
      this.http.get('http://api.apixu.com/v1/current.json?key=43c1bdb61d85452b803192306190301',{params:params[1]}),
      this.http.get('http://api.apixu.com/v1/current.json?key=43c1bdb61d85452b803192306190301',{params:params[2]})
    );
  }
}
