import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormOrganizationRoutingModule } from './form-organization-routing.module';
import { FormOrganizationComponent } from './form-organization.component';

import { NzMessageModule } from 'ng-zorro-antd/message';
import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';


@NgModule({
  declarations: [
    FormOrganizationComponent
  ],
  imports: [
    CommonModule,
    FormOrganizationRoutingModule,

    // ReactiveFormsModule,
    // NzFormModule,
    // NzButtonModule,
    // NzInputModule,
    // NzAlertModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class FormOrganizationModule { }
