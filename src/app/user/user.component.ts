import {Component, EventEmitter, Input, Output} from '@angular/core';

type User = {
  id: string;
  avatar: string;
  name: string;
}

interface UserInterface {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onUserSelect() {
    this.select.emit(this.user.id);
  }
}
