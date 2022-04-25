import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    // Completes after recieveing 1 user. Unsubscribe automatically after that.
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user); 
    if (currentUser){
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + currentUser.token // .clone - Attatch token to every http request and send it with the request
        }
      })
    }

    return next.handle(request);
  }
}
