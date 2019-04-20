import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private fb: FormBuilder;
  private loginService: LoginService;
  private router: Router;
  public loginForm: FormGroup;
  public username: string;
  public password: string;
  public authSubscription: Subscription;
  constructor(
    fb: FormBuilder,
    loginService: LoginService,
    router: Router
    ) {
      this.fb = fb;
      this.loginService = loginService;
      this.router = router;
    }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  public onLogin(): void {
    this.loginService.userLogin(this.loginForm.value.username);
    this.router.navigate(['/']);

  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
