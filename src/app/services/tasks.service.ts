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
    const task = this.tasks.find(item => item.id === currentTaskId)!
    const taskIndex = this.tasks.findIndex(item => item.id === currentTaskId)!
    task.currentStatus = newColumnId
    this.tasks[taskIndex] = task
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(item => item.id !== taskId)
  }

  editTask(task:Task){
    const taskIndex=this.tasks.findIndex(item=>item.id===task.id)
    const arr = [...this.tasks]
    arr[taskIndex] = task
    this.tasks = arr
  }
}
