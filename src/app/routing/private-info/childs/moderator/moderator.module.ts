import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeratorRoutingModule } from './moderator-routing.module';
import { EditInfoComponent } from './edit-info/edit-info.component';


@NgModule({
  declarations: [
    EditInfoComponent
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule
  ]
})
export class ModeratorModule { }
