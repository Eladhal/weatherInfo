import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { 
  }

  ngOnInit() {
  }

  searchPress(term) {
    this.apiService.searchCities(term);
 } 

}
