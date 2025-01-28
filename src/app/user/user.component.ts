import {Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

function getRandomIndex() {
  return Math.floor(Math.random() * DUMMY_USERS.length);
}

const randomIndex = getRandomIndex();

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'users/' + this.selectedUser().avatar);

  onUserSelect() {
    const randomIndex = getRandomIndex();
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
