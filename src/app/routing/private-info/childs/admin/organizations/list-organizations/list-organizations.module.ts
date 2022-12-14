import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrganizationsRoutingModule } from './list-organizations-routing.module';
import { ListOrganizationsComponent } from './list-organizations.component';

import { UiViewModule } from 'src/app/routing/private-info/ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    ListOrganizationsComponent
  ],
  imports: [
    CommonModule,
    ListOrganizationsRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class ListOrganizationsModule { }
