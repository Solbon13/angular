import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionPersonRoutingModule } from './position-person-routing.module';
import { FormPositionPersonComponent } from './form-position-person/form-position-person.component';
import { ListPositionPersonComponent } from './list-position-person/list-position-person.component';
import { UiViewModule } from '../../../ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    FormPositionPersonComponent,
    ListPositionPersonComponent
  ],
  imports: [
    CommonModule,
    PositionPersonRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class PositionPersonModule { }
