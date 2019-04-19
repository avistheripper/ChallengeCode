import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public task: any;
  public taskId: string;
  public editorOptions = {theme: 'vs-dark', language: 'javascript', fontSize: '20px'};
  public code: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.taskService.getTask(id)
        .subscribe(res => {
          this.task = res;
          this.code = this.task.code;
        });
    });
  }

  public onSubmit(): void {
    console.log(this.code);
  }

}
