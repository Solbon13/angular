import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: ()=>import('./menu-site/menu-site.module').then(m=>m.MenuSiteModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }
