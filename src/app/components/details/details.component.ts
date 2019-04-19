import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

import { TaskService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public task: Post;
  public taskId: string;
  public editorOptions = {theme: 'vs-dark', language: 'javascript', fontSize: '20px'};
  public code = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.taskService.getTask(id)
        .subscribe(res => this.task = res);
    });
  }

  public onSubmit(): void {
    console.log(this.code);
  }

}
