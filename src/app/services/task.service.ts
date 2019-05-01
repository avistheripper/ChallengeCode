import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../config/task';
import { Stat } from '../config/stat';

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
  public getStats(): Observable<Stat[]> {
    // return this.http.get<Stat>(`http://localhost:5000/api/v1/stats/rankings`);
    return of([
    {
      date: '25-09-2019',
      time: 1231232,
      task: 'Love triangle',
      score: 5
    },
    {
      date: '25-09-2019',
      time: 22333,
      task: 'Temperature switch',
      score: 1
    }
  ]);
  }
}
