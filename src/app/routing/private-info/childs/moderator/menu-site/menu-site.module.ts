import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSiteRoutingModule } from './menu-site-routing.module';
import { FormMenuSiteComponent } from './form-menu-site/form-menu-site.component';
import { ListMenuSiteComponent } from './list-menu-site/list-menu-site.component';
import { UiViewModule } from '../../../ui-view/ui-view.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    FormMenuSiteComponent,
    ListMenuSiteComponent
  ],
  imports: [
    CommonModule,
    MenuSiteRoutingModule,
    NzMessageModule,
    UiViewModule
  ]
})
export class MenuSiteModule { }
