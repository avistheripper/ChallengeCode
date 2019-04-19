import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/post.service';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public post: Post;
  public postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restService: TaskService,
    ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.postForm = this.fb.group({
      title: ['' , Validators.compose([
        Validators.required,
        Validators.maxLength(40)]
      )],
      url: ['' , Validators.required],
      description: ['' , Validators.compose([
        Validators.required,
        Validators.maxLength(400)]
      )]
    });
  }

  public onSave(task: Post): void {
    console.log('Saving...');
    // this.restService.createTask(task)
    //   .subscribe(() => console.log('Post added!')
    //   );
  }

  public onCancel(): void {
    console.log('Cancelled');

  }

}
