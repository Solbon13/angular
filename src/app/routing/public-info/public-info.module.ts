import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicInfoRoutingModule } from './public-info-routing.module';
import { PublicInfoComponent } from './public-info.component';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MyHeaderComponent } from './components/my-header/my-header.component';

@NgModule({
  declarations: [
    PublicInfoComponent,
    MyHeaderComponent
  ],
  imports: [
    CommonModule,
    PublicInfoRoutingModule,

    NzLayoutModule,
    NzMenuModule,
  ]
})
export class PublicInfoModule { }
