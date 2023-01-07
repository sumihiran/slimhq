import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksService } from "./task-list/tasks.service";

@NgModule({
  declarations: [AppComponent, TaskListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
