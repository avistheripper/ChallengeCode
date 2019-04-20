import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuth: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.loginService.getUserStatus().subscribe(res => this.isAuth = res);
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
  }
}
