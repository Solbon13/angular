import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateInfoRoutingModule } from './private-info-routing.module';
import { PrivateInfoComponent } from './private-info.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    PrivateInfoComponent,
    HeaderComponent,
    SiderComponent
  ],
  imports: [
    CommonModule,
    PrivateInfoRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzButtonModule,
    // NzTypographyModule,
    NzGridModule
  ]
})
export class PrivateInfoModule { }
