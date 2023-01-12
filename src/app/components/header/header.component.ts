import {Component} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  appTitle = 'best to do app ever '

  constructor(public tasksService:TasksService) {
  }
  consoleee(){
    console.log(this.tasksService.tasks)
  }
}
