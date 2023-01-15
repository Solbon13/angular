import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskPageRoutingModule } from './task-page-routing.module';
import { ListTaskComponent } from './list-task/list-task.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { UiViewModule } from '../../ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    ListTaskComponent,
    FormTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskPageRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class TaskPageModule { }
