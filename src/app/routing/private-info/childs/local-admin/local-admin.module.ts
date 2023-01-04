import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalAdminRoutingModule } from './local-admin-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LocalAdminRoutingModule,
    FormsModule,
  ]
})
export class LocalAdminModule { }
