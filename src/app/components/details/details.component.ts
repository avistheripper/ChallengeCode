import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/config/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public routeSub: Subscription;
  public task: Task;
  public taskId: string;
  public editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    fontSize: '20px',
    height: '300px'
  };
  public code: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
    ) { }

  public ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.taskService.getTask(id)
        .subscribe(res => {
          this.task = res;
          this.code = this.task.code;
        });
    });
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  public onSubmit(): void {
    console.log(this.code);
  }
}
