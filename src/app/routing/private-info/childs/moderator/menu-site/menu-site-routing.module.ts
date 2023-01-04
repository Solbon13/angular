import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMenuSiteComponent } from './form-menu-site/form-menu-site.component';
import { ListMenuSiteComponent } from './list-menu-site/list-menu-site.component'

const routes: Routes = [
      {
    path: ':ID',
    component: FormMenuSiteComponent
    // loadChildren: ()=>import('./form-departament/form-departament.module').then(m=>m.FormDepartamentModule)
  },
  {
    path: '',
    component: ListMenuSiteComponent
    // loadChildren: ()=>import('./list-menu-site/list-menu-site.module').then(m=>m.ListMenuSiteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuSiteRoutingModule { }
