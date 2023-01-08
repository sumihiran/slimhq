import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { TasksService } from "./tasks.service";
import { Observable, of } from "rxjs";
import { ITask } from "@slimhq/common";

const TASKS : Array<ITask> = [
  {
    id: 1,
    title: 'Start coding'
  }
]

describe('Component: TaskList', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  const taskServiceStub = {
    getAll(): Observable<Array<ITask>> {
      return of(TASKS)
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: TasksService,
          useValue: taskServiceStub
        }
      ],
      declarations: [TaskListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of tasks on init', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    component.ngOnInit();

    const tasks = compiled.querySelector("ul > li");
    expect(tasks)
      .not.toBeNull();

    expect(tasks?.innerHTML)
      .toContain("Start coding")
  })
});
