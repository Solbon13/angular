import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDepartamentRoutingModule } from './form-departament-routing.module';
import { FormDepartamentComponent } from "./form-departament.component";

import { NzMessageModule } from 'ng-zorro-antd/message';
import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';


@NgModule({
  declarations: [
    FormDepartamentComponent
  ],
  imports: [
    CommonModule,
    FormDepartamentRoutingModule,

    UiViewModule,
    NzMessageModule,
  ]
})
export class FormDepartamentModule { }
