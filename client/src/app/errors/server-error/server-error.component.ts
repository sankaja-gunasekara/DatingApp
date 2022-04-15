import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
  
    const navigation = this.router.getCurrentNavigation();
    // Only get navigation state once (when navigating to the server-erro page). Loose the state when the page refreshes.
    this.error = navigation?.extras?.state?.error;  // ? optional chaining operators
   }

  ngOnInit(): void {
  }

}
