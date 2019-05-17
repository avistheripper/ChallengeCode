import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { apiEndPoint } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isAuth: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isAuthenticated());
  constructor(private http: HttpClient) { }

  public userLogin(user: string): void {
      this.http.post(`${apiEndPoint}/users/register`, {name: user})
        .pipe(
          map((res: {token: string}) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', user);
          return of(true);
        }),
          catchError((err: HttpErrorResponse) => {
            return of(false);
        }))
        .subscribe((result: Observable<boolean>) => {
            if (result) {
              this.isAuth.next(true);
            } else {
              this.isAuth.next(false);
            }
        });
  }

  public userLogout(): void {
    localStorage.removeItem('token');
    this.isAuth.next(false);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public getUserStatus(): Observable<boolean> {
    return this.isAuth;
  }
}
