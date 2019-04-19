import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../config/posts';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  public getTasks(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:5000/api/v1/tasks?page=1');
  }
  public getTask(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:5000/api/v1/tasks/${id}`);
  }
}
