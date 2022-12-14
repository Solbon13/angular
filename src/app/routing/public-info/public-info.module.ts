import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicInfoRoutingModule } from './public-info-routing.module';
import { PublicInfoComponent } from './public-info.component';
import { ListInfoComponent } from './list-info/list-info.component';


@NgModule({
  declarations: [
    PublicInfoComponent,
    ListInfoComponent
  ],
  imports: [
    CommonModule,
    PublicInfoRoutingModule
  ]
})
export class PublicInfoModule { }
