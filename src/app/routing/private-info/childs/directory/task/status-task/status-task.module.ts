import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusTaskRoutingModule } from './status-task-routing.module';
import { FormStatusTaskComponent } from './form-status-task/form-status-task.component';
import { ListStatusTaskComponent } from './list-status-task/list-status-task.component';
import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';


@NgModule({
  declarations: [
    FormStatusTaskComponent,
    ListStatusTaskComponent
  ],
  imports: [
    CommonModule,
    StatusTaskRoutingModule,
    UiViewModule
  ]
})
export class StatusTaskModule { }
