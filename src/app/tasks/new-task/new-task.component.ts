import {Component, inject, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTask} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  readonly userId = input.required<string>();
  readonly close = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    },
      this.userId()
    );
    this.close.emit();
  }
}
