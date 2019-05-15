import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder
    ) { }

  public ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      taskDescription: ['', Validators.required],
      difficulty: ['', Validators.required],
      code: ['', Validators.required],
  });
}

  public addTask(): void {
    const taskToServe = {
      ...this.taskForm.value,
      id: `${Math.floor(Math.random() * 100)}`,
      entry: this.taskForm.value.name,
      tests: [
        {
          'input': 'string',
          'output': 'string',
          'status': 'string'
        }
      ],
      enabled: true,
      topic: 'none',
    user: 'Igor'
    };
    console.log(taskToServe);
     this.taskService.createTask(taskToServe)
       .subscribe(res => console.log(res));
  }

}
