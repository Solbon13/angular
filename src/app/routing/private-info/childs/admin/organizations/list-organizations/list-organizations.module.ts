import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrganizationsRoutingModule } from './list-organizations-routing.module';
import { ListOrganizationsComponent } from './list-organizations.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    ListOrganizationsComponent
  ],
  imports: [
    CommonModule,
    ListOrganizationsRoutingModule,
    NzListModule,
    NzAlertModule,
    // NzPopconfirmModule,
    NzMessageModule
  ]
})
export class ListOrganizationsModule { }
