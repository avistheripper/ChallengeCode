import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Stat } from 'src/app/config/stat';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    this.user = localStorage.getItem('username');
  }

}
