import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginService } from 'src/app/services/login.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public isAuthSub: Subscription;
  public user;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private taskService: TaskService,
    ) {

    }
  ngOnInit() {
    this.isAuthSub = this.loginService.isAuth
      .subscribe((res: boolean) => {
        res
          ? this.user = localStorage.getItem('username')
          : this.user = undefined;
      });
  }

  onLogout(): void {
    this.loginService.userLogout();
    this.router.navigate(['/login']);
  }
  addTask() {
    this.taskService.createTask({
      'id': '24',
      'name': 'Sample',
      'topic': 'none',
      'shortDescription': 'Sample task to check',
      'taskDescription': 'Bla bla bla bla',
      'difficulty': 'Middle',
      'code': 'const a = a => a;',
    'entry': 'Sample',
      'tests': [
        {
          'input': 'string',
          'output': 'string',
          'status': 'string'
        }
      ],
      'enabled': true,
    'user': 'Igor'
    }).subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.isAuthSub.unsubscribe();
  }

}
