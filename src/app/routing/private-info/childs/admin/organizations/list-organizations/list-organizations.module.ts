import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrganizationsRoutingModule } from './list-organizations-routing.module';
import { ListOrganizationsComponent } from './list-organizations.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [
    ListOrganizationsComponent
  ],
  imports: [
    CommonModule,
    ListOrganizationsRoutingModule,
    NzListModule,
    NzAlertModule
  ]
})
export class ListOrganizationsModule { }
