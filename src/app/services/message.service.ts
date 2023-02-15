import {Injectable} from '@angular/core';
import {tasks as qq} from "../mocks/tasks";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = '';
  tasks: any = []

  setMessage(message: string) {
    this.message = message;
    this.tasks = qq
  }

  getMessage() {
    return this.message;
  }
}
