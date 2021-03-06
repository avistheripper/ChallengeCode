import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { TaskService } from 'src/app/services/task.service';
import { Stat } from 'src/app/config/stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public $taskStats: Observable<Stat[]>;
  public user: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.$taskStats = this.taskService.getStats()
      .pipe(
        map(stat => stat)
      );
      const userName = localStorage.getItem('username');
      if (userName) {
        this.user = userName;
      }
  }

}
