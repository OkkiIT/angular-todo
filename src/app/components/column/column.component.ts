import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "../../models/tasks";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TasksService} from "../../services/tasks.service";
import {ColumnsType} from "../../models/columns";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() columnTitle: string = ''
  @Input() columnKey:ColumnsType
  @Input() tasks: Task[] = [];
  @Input() dragAndDropColumns: string[] = []

  constructor(private tasksService:TasksService) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  drop(event: CdkDragDrop<Task[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex)
    } else {
      const {id} = event.previousContainer.data[event.previousIndex]
      this.tasksService.changeTaskColumn(id,this.columnKey)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    console.log(this.tasks)
  }
  console(e:any){
    console.log(e)
  }
}
