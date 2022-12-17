import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
    NzCardModule
  ]
})
export class AuthUserModule { }
