import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ListPersonComponent } from './list-person/list-person.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { UiViewModule } from '../../../ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    ListPersonComponent,
    FormPersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class PersonModule { }
