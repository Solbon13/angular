import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeTaskRoutingModule } from './type-task-routing.module';
import { FormTypeTaskComponent } from './form-type-task/form-type-task.component';
import { ListTypeTaskComponent } from './list-type-task/list-type-task.component';
import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';


@NgModule({
  declarations: [
    FormTypeTaskComponent,
    ListTypeTaskComponent
  ],
  imports: [
    CommonModule,
    TypeTaskRoutingModule,
    UiViewModule
  ]
})
export class TypeTaskModule { }
