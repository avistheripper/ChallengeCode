import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }
  onLogout(): void {
    this.loginService.userLogout();
    this.router.navigate(['/login']);
  }

}
