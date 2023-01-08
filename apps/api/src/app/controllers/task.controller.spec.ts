import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { Application } from "express";
import { TasksController } from "./tasks.controller";
import { ITask, TasksService } from "../tasks.service";
import * as request from "supertest";

describe('TaskController', () => {
  let app: Application | null;
  let controller: TasksController;

  const result: Array<ITask> = [
    {
      id: 1,
      title: 'Task title'
    }
  ];

  const mockTaskService: Partial<TasksService> = {
    getAll: jest.fn(() => result),
  }

  beforeEach(() => {
    app = createExpressServer({
      cors: true,
      controllers: [
        TasksController
      ]
    });
    Container.set(TasksService, mockTaskService);
    useContainer(Container);
    controller = Container.get(TasksController)
  });

  afterEach(() => {
    Container.reset();
    app = null;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET /api/tasks : should return list of tasks', async () => {

    expect(controller.getAll()).toEqual(result)

    await request(app)
      .get('/api/tasks')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
          expect(res.body).toEqual(result)
      });

  });
});
