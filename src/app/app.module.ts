import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// test
import {HeaderComponent} from './components/header/header.component';
import {ContentContainerComponent} from './components/content-container/content-container.component';
import {ColumnComponent} from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskColumnFilterPipe } from './pipes/task-column-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DragDropColumnsFilterPipe } from './pipes/grag-drop-columns-filter.pipe';
import { ElemAutofocusDirective } from './directives/elem-autofocus.directive';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ModalComponent } from './components/modal/modal.component';
//test
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentContainerComponent,
    ColumnComponent,
    TaskComponent,
    ButtonComponent,
    TaskColumnFilterPipe,
    DragDropColumnsFilterPipe,
    ElemAutofocusDirective,
    LoaderComponent,
    AddTaskComponent,
    ModalComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
