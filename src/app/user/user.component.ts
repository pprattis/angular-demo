import {Component, EventEmitter, Input, Output} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onUserSelect() {
    this.select.emit(this.user.id);
  }
}
