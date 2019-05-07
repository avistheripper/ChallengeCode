import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/config/task';
import { Subscription, Subject } from 'rxjs';
import { delay, map, switchAll, repeat } from 'rxjs/operators';
import { editorConfig } from 'src/app/config/editor-config';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public routeSub: Subscription;
  public task: Task;
  public taskId: number;
  public testFinished = false;
  public testResult: string | null;
  public loading: boolean;
  public testId: string;
  public editorOptions = editorConfig;
  public solution$: Subject<string> = new Subject<string>();
  public code: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
    ) { }

  public ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.taskId = params['id'];
      this.taskService.getTask(this.taskId)
        .subscribe(res => {
          this.task = res;
          this.code = this.task.code;
        });
    });
    this.initPolling();
  }

  public onSubmit(): void {
    this.taskService.submitTask(this.taskId, this.code)
      .subscribe(res => {
        this.testId = res.sid;
        this.solution$.next(this.code);
        this.loading = true;
      }
        );
  }

  public initPolling(): void {
    this.solution$.pipe(
      delay(3000),
      map((query: string) => this.taskService.getSolutionStatus(this.taskId, this.testId)),
      repeat(3),
      switchAll(),
    )
        .subscribe(res => {
          switch (res.status) {
            case 'tested':
            res.results.forEach(({status}) => {
              status === 'failed'
                ? this.testResult = 'failure'
                : this.testResult = 'success';
            });
              this.testFinished = true;
              this.loading = false;
              break;
            case 'terminated':
              this.testFinished = true;
              this.loading = false;
              this.testResult = 'failure';
              break;
            case 'error':
              this.testFinished = true;
              this.loading = false;
              this.testResult = 'syntax';
              break;
            default:
            this.solution$.next(this.code);
          }
        });
  }

  public refreshTask(): void {
    this.testFinished = false;
    this.testResult = null;
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
