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
      const {id:firstId} = event.previousContainer.data[event.previousIndex]
      const {id:secondId} = event.previousContainer.data[event.currentIndex]
      const firstPos = this.tasksService.tasks.findIndex(item=>item.id===firstId)
      const secondPos = this.tasksService.tasks.findIndex(item=>item.id===secondId)
      moveItemInArray(this.tasksService.tasks,firstPos,secondPos)
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex)
    } else {
      const {id} = event.previousContainer.data[event.previousIndex]
      const {id:firstId} = event.previousContainer.data[event.previousIndex]
      const firstElemPos= this.tasksService.tasks.findIndex(item=>item.id===firstId)
      if(!!event.container.data[event.currentIndex-1]){
        const {id:secondId} = event.container.data[event.currentIndex-1]
        const secondElemPos=this.tasksService.tasks.findIndex(item=>item.id===secondId)
        moveItemInArray(this.tasksService.tasks,firstElemPos,secondElemPos)
      }
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
  }
  console(e:any){
    console.log(e)
  }
}
