import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormOrganizationRoutingModule } from './form-organization-routing.module';
import { FormOrganizationComponent } from './form-organization.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    FormOrganizationComponent
  ],
  imports: [
    CommonModule,
    FormOrganizationRoutingModule,

    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ]
})
export class FormOrganizationModule { }