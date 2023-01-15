import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateInfoComponent } from './private-info.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateInfoComponent,
    children: [
      {
        path: 'local-admin',
        loadChildren: ()=>import('./childs/local-admin/local-admin.module').then(m=>m.LocalAdminModule)
      },
      {
        path: 'admin',
        loadChildren: ()=>import('./childs/admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path: 'moderator',
        loadChildren: ()=>import('./childs/moderator/moderator.module').then(m=>m.ModeratorModule)
      },
    
      {
        path: 'profile',
        loadChildren: ()=>import('./childs/auth-user/auth-user.module').then(m=>m.AuthUserModule)
      },
      {
        path: 'directory',
        loadChildren: ()=>import('./childs/directory/directory.module').then(m=>m.DirectoryModule)
      },
      {
        path: 'tasks',
        loadChildren: ()=>import('./childs/task-page/task-page.module').then(m=>m.TaskPageModule)
      },
      // {
      //   path: '',
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateInfoRoutingModule { }
