import {Injectable} from '@angular/core';
import {Task} from "../models/tasks";
import {tasks as mockedTasks} from "../mocks/tasks";
import {ColumnsType} from "../models/columns";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = []

  constructor() {
  }

  getAllTasks() {
    this.tasks = mockedTasks
    return this.tasks
  }

  addNewTask(newTask: Task) {
    this.tasks.push(newTask)
    this.tasks = [...this.tasks]
  }

  changeTaskColumn(currentTaskId: string, newColumnId: ColumnsType) {
    console.log(this.tasks,'before')
    const task = this.tasks.find(item => item.id === currentTaskId)!
    const taskIndex = this.tasks.findIndex(item => item.id === currentTaskId)!
    task.currentStatus = newColumnId
    this.tasks[taskIndex] = task
    console.log(this.tasks,'after')
  }
}
