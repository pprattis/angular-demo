import {Component, input, output} from '@angular/core';
import { type User } from './user.model';
import {CardComponent} from '../../shared/card/card.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
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
