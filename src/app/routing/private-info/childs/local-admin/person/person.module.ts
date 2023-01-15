import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ListPersonComponent } from './list-person/list-person.component';
import { UiViewModule } from '../../../ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    ListPersonComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class PersonModule { }
