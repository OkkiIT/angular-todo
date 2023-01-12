import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../../models/tasks";
import {ColumnsType} from "../../models/columns";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @ViewChild('input') titleInput: ElementRef
  @ViewChild('textArea') descriptionArea: ElementRef

  @Input() description: string = ''
  @Input() title: string = ''
  @Input() id: string = ''
  @Input() currentStatus: ColumnsType

  isEditing: boolean = false;
  isLoading: boolean = false

  form = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>('')
  })

  ngOnInit(): void {
    this.form.controls.title.setValue(this.title)
    this.form.controls.description.setValue(this.description)
  }

  toggleEdit() {
    this.isEditing = !this.isEditing
  }

  submitEditing() {
    this.blurElement()
    const description = this.form.getRawValue().description as string
    const title = this.form.getRawValue().title as string;
    this.isLoading = true
    const editedTask: Task = {
      id: this.id,
      description,
      title,
      currentStatus: this.currentStatus
    }

    setTimeout(() => {
      this.isLoading = false
      this.description = editedTask.description
      this.title = editedTask.title
    }, 1000)
  }

  private blurElement() {
    this.titleInput.nativeElement.blur()
    this.descriptionArea.nativeElement.blur()
  }
}
