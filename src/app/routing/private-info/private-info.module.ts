import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateInfoRoutingModule } from './private-info-routing.module';
import { PrivateInfoComponent } from './private-info.component';


@NgModule({
  declarations: [
    PrivateInfoComponent
  ],
  imports: [
    CommonModule,
    PrivateInfoRoutingModule
  ]
})
export class PrivateInfoModule { }
