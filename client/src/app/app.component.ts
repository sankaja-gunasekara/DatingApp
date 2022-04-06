import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    // Observables are lazy, doesn't do anything until we subscribe (doesn't get the data)
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
