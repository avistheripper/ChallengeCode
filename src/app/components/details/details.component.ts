import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public post: Post;
  public postId: string;
  public editorOptions = {theme: 'vs-light', language: 'javascript', fontSize: '20px'};
  public code = 'function x() {\nconsole.log("Hello world!");\n}';
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.postService.getPost(id)
        .subscribe(res => this.post = res);
    });
  }

}
