import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // Two way binding - can bind data/properties from our component and display them in the template (html) 
  // or get data from forms and use them in the component

  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {}

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
    }
    // , error => {
    //   console.log(error);
    //   this.toastr.error(error.error);
    // }
    )
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
