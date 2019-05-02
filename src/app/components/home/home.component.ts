import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/config/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public tasks: Array<Task>;
  public taskSubscription: Subscription;
  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    // localStorage.setItem(
    //   'token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGV2LXVzZXIifQ.lddHi-4Qn3Bipusgbe8qsihWsePbgRTstn_5RnuZfE8'
    // );
    this.taskSubscription = this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

  public ngOnDestroy(): void {
    this.taskSubscription.unsubscribe();
  }

}
