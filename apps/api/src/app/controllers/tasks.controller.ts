import { Get, JsonController } from "routing-controllers";
import { TasksService } from "../tasks.service";
import { Service } from "typedi";
import { ITask } from "@slimhq/common";

@JsonController()
@Service()
export class TasksController {
  constructor(private readonly taskService: TasksService) {
  }

  @Get('/api/tasks')
  getAll(): Array<ITask> {
    return this.taskService.getAll();
  }
}
