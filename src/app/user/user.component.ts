import {Component, input, output} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  readonly user = input.required<User>();
  readonly selected = input.required<boolean>();
  readonly select = output<string>();

  get imagePath() {
    return 'users/' + this.user().avatar;
  }

  onUserSelect() {
    this.select.emit(this.user().id);
  }
}
