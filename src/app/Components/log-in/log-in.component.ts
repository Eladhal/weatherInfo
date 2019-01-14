import { Component, OnInit } from '@angular/core';
import {DbApiService} from 'src/app/services/db.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private dbService: DbApiService) {
  }

  ngOnInit() {
  }

  btnLogin(data: {username:string,password:string}) {
      this.dbService.getCitiesFromDB(data.username, data.password);       
  }

}
