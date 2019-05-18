import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { apiEndPoint } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isAuth: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isAuthenticated());
  constructor(private http: HttpClient) { }

  public userLogin(user: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${apiEndPoint}/users/register`, {name: user});
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

  public getUserName(): Observable<string | null> {
    return of(localStorage.getItem('username'));
  }
}
