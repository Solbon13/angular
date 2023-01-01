import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { FormDepartamentComponent } from './form-departament/form-departament.component';
import { ListDepartamentComponent } from './list-departament/list-departament.component';


@NgModule({
  declarations: [
    FormDepartamentComponent,
    ListDepartamentComponent
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule
  ]
})
export class DepartamentModule { }
