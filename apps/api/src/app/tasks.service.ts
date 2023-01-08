import { Service } from "typedi";
import { ITask } from "@slimhq/common";

const tasks: Array<ITask> = [
  {
    id: 1,
    title: 'Start coding'
  }
]


@Service()
export class TasksService {
  getAll(): Array<ITask> {
    return tasks;
  }
}
