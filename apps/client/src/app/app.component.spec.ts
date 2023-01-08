import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TasksService } from "./task-list/tasks.service";
import { Observable, of } from "rxjs";
import {TaskListComponent} from "./task-list/task-list.component";
import { ITask } from "@slimhq/common";

describe('AppComponent', () => {

  const taskServiceStub : Partial<TasksService> = {
    getAll(): Observable<Array<ITask>> {
      return of([])
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
      declarations: [AppComponent, TaskListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SlimHQ'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SlimHQ');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'SlimHQ - Project management for small teams'
    );
  });
});
