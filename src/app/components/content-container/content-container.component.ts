import {Component, OnInit} from '@angular/core';
import {Column} from "../../models/columns";
import {columns} from "../../mocks/columns";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  columns: Column[] = columns
  dragAndDropColumns: string[] = []
  isLoading: boolean = false

  constructor(public tasksService:TasksService) {
  }

  ngOnInit(): void {
    this.tasksService.getAllTasks()
  }
}
