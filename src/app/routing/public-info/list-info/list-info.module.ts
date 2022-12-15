import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListInfoRoutingModule } from './list-info-routing.module';
import { ListInfoComponent } from './list-info.component';

import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    ListInfoComponent
  ],
  imports: [
    CommonModule,
    ListInfoRoutingModule,
    NzListModule
  ]
})
export class ListInfoModule { }
