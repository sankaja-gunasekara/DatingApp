import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // Two way binding - can bind data/properties from our component and display them in the template (html) 
  // or get data from forms and use them in the component

  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {}

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
  }

}
