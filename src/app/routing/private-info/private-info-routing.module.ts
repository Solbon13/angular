import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateInfoComponent } from './private-info.component';

const routes: Routes = [
  {
    path: 'register',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./childs/local-admin/local-admin.module').then(m=>m.LocalAdminModule)
  },
  {
    path: 'admin',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./childs/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'edit-info',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./childs/moderator/moderator.module').then(m=>m.ModeratorModule)
  },
  {
    path: 'profile',
    component: PrivateInfoComponent,
    loadChildren: ()=>import('./childs/auth-user/auth-user.module').then(m=>m.AuthUserModule)
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
