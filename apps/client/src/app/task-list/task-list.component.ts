import { Component, OnInit } from "@angular/core";
import { TasksService } from "./tasks.service";
import { ITask } from "@slimhq/common";

@Component({
  selector: "sq-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

  isLoading = true;

  tasks: Array<ITask> = [];

  constructor(private readonly taskService: TasksService) {
  }

  ngOnInit(): void {
    this.taskService.getAll()
      .subscribe(tasks => {
        this.isLoading = false;
        this.tasks = tasks;
      });
  }
}
