import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const TASKS = '/api/tasks';

export interface ITask {
  id: number,
  title: string
}

@Injectable()
export class TasksService {
  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<Array<ITask>> {
    return this.http.get<Array<ITask>>(TASKS);
  }
}
