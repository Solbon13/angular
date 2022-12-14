import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateInfoComponent } from './private-info.component';

const routes: Routes = [
  {
    path: 'register',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./local-admin/local-admin.module').then(m=>m.LocalAdminModule)
  },
  {
    path: 'edit-org',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'edit-info',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./moderator/moderator.module').then(m=>m.ModeratorModule)
  },
  {
    path: 'profile',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./auth-user/auth-user.module').then(m=>m.AuthUserModule)
  },
  {
    path: '',
    component: PrivateInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateInfoRoutingModule { }
