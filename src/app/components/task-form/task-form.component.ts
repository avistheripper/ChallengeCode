import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
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
