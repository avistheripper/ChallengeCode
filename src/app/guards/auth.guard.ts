
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private loginService: LoginService;
    constructor(loginService: LoginService) {
        this.loginService = loginService;
    }
    public canActivate(): Observable<boolean> {
       return this.loginService.getUserStatus();
    }
}
