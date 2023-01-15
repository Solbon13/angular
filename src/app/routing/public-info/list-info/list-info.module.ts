import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListInfoRoutingModule } from './list-info-routing.module';
import { ListInfoComponent } from './list-info.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    ListInfoComponent
  ],
  imports: [
    CommonModule,
    ListInfoRoutingModule,
    NzCardModule,
    NzGridModule
  ]
})
export class ListInfoModule { }
