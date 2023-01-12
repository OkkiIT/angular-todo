import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../models/tasks";

@Pipe({
  name: 'taskColumnFilter',
})
export class TaskColumnFilterPipe implements PipeTransform {

  transform(tasksArray: Task[], columnKey: string): Task[] {
    const arr = tasksArray
    if (!arr) return []
    if (!columnKey) return arr
    return arr.filter(item => item.currentStatus === columnKey)
  }

}
