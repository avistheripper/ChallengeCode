import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../config/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:5000/api/v1/tasks?page=1');
  }
  public getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`http://localhost:5000/api/v1/tasks/${id}`);
  }
}
