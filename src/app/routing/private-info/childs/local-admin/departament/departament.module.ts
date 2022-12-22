import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { UiViewModule } from '../../../ui-view/ui-view.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule,
    UiViewModule
  ]
})
export class DepartamentModule { }
