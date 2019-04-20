import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }

  public userLogin(user): void {
      localStorage.setItem('username', user);
      this.isAuth.next(true);
  }

  public userLogout(): void {
    localStorage.removeItem('username');
    this.isAuth.next(false);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('username');
  }

  public getUserStatus(): Observable<boolean> {
    return this.isAuth;
  }
}
