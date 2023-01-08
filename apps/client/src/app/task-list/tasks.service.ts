import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from "@slimhq/common";

const TASKS = '/api/tasks';

@Injectable()
export class TasksService {
  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<Array<ITask>> {
    return this.http.get<Array<ITask>>(TASKS);
  }
}
