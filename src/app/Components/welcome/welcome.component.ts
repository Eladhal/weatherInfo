import { Component, OnInit,OnDestroy } from '@angular/core';
import {ApiServiceService} from 'src/app/services/api.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit,OnDestroy {
  results:string[];
  subsGetCities: Subscription;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.subsGetCities = this.apiService.getCities().subscribe(cities => { 
      this.results = cities; 
    });
  }

  clickEvent(data){
    this.apiService.citySelected(data);
  }
  
  ngOnDestroy() {
    this.subsGetCities.unsubscribe();
  }

}
