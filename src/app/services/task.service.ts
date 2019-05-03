import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task, TaskStatus, SolutionStatus } from '../config/task';
import { Stat } from '../config/stat';

const apiEndPoint = 'api/v1';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${apiEndPoint}/tasks?page=1`);
  }
  public getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${apiEndPoint}/tasks/${id}`);
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
  public submitTask(id: number, code: string): Observable<TaskStatus> {
    return this.http.post<TaskStatus>(`${apiEndPoint}/tasks/${id}/submit`, { code });
  }

  public getSolutionStatus(id: number, sid: string): Observable<SolutionStatus> {
    return this.http.get<SolutionStatus>(`${apiEndPoint}/tasks/${id}/status/${sid}`);
  }
}
