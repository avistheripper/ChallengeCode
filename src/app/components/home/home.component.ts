import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/post.service';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Array<Post>;
  constructor(private taskService: TaskService) {}
  public ngOnInit(): void {
    localStorage.setItem(
      'token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGV2LXVzZXIifQ.lddHi-4Qn3Bipusgbe8qsihWsePbgRTstn_5RnuZfE8');
    this.taskService.getTasks().subscribe((res) => {
      console.log(res);
    });
  }

}
