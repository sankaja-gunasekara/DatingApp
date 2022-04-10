import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

// Decorator - gives class some extra powers (here, class to be an angular component)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users : any; //Turned off type safety with "any" keyword

  // Life cycle events - 1) constructor - dependancy injection 2) Initialization (Implements OnInit)
  // Too early to make an Http request here. Here we construct the component and make sure Http service is available
  // Http requests are async
  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
