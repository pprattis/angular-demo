import {Component, inject, input} from '@angular/core';
import { type Task } from './task.model';
import {CardComponent} from '../../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  readonly task = input.required<Task>();
  private tasksService = inject(TasksService);


  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
