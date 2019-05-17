
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

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
