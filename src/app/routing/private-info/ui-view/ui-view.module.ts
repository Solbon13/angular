import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewListComponent } from './view-list/view-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewAlertErrorComponent } from './view-alert-error/view-alert-error.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { ViewFormComponent } from './view-form/view-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ViewTableComponent } from './view-table/view-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


@NgModule({
  declarations: [
    ViewListComponent,
    ViewMenuComponent,
    ViewAlertErrorComponent,
    ViewFormComponent,
    ViewTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzListModule,
    NzPopconfirmModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule,
    NzSelectModule,
    NzTableModule,
    NzDropDownModule,
    FormsModule,
    NzIconModule,
    NzCheckboxModule
  ],
  exports: [
    ViewListComponent,
    ViewMenuComponent,
    ViewAlertErrorComponent,
    NzMessageModule,
    ViewFormComponent,
    ViewTableComponent
  ]
})
export class UiViewModule { }
