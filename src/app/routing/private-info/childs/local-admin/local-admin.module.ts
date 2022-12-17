import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalAdminRoutingModule } from './local-admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LocalAdminRoutingModule,
    FormsModule,
  ]
})
export class LocalAdminModule { }
