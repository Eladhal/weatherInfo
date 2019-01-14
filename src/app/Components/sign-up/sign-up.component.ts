import { Component, OnInit } from '@angular/core';
import {DbApiService} from 'src/app/services/db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private dbService: DbApiService, private router: Router) {
  }

  ngOnInit() {
  }

  btnSignUp(data: {username:string,password:string}) {
      // keep user info on Local storage or sessionStorage
      this.router.navigate(['']);
  }

}
