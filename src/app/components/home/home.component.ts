import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/config/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tasks: Array<Task>;
  constructor(private taskService: TaskService) {}
  public ngOnInit(): void {
    localStorage.setItem(
      'token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGV2LXVzZXIifQ.lddHi-4Qn3Bipusgbe8qsihWsePbgRTstn_5RnuZfE8'
    );
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

}
