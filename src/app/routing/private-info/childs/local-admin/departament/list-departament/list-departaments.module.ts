import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDepartamentRoutingModule } from './list-departament-routing.module';
import { ListDepartamentComponent } from './list-departament.component';
import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    ListDepartamentComponent
  ],
  imports: [
    CommonModule,
    ListDepartamentRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class ListDepartamentsModule { }
