import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskComponent } from './form-task/form-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

const routes: Routes = [
  {
    path: ':ID',
    component: FormTaskComponent
    // loadChildren: ()=>import('./form-departament/form-departament.module').then(m=>m.FormDepartamentModule)
  },
  {
    path: '',
    component: ListTaskComponent
    // loadChildren: ()=>import('./list-menu-site/list-menu-site.module').then(m=>m.ListMenuSiteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskPageRoutingModule { }
