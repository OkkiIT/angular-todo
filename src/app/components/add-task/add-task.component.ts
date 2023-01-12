import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Task} from 'src/app/models/tasks';
import {TasksService} from "../../services/tasks.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private tasksService:TasksService,public modalService:ModalService) {
  }

  submitAdding() {
    const title = this.form.getRawValue().title as string
    const description = this.form.getRawValue().description as string

    const newTask: Task = {
      title,
      description,
      id: 'hi',
      currentStatus: 'todo'
    }
    this.tasksService.addNewTask(newTask)
    this.closeModal()
  }

  closeModal(){
    this.modalService.close()
  }

  ngOnInit(): void {
    console.log(this.tasksService.tasks)
  }
}
