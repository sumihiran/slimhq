import { Service } from "typedi";

export interface ITask {
  id: number,
  title: string
}

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
