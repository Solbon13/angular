import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicInfoComponent } from './public-info.component';

const routes: Routes = [
  {
    path: 'login',
    component: PublicInfoComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'list',
    component: PublicInfoComponent,
    loadChildren: () => import('./list-info/list-info.module').then(m => m.ListInfoModule)
  },
  {
    // сделаю потом редирект на 1 лист
    path: '',
    component: PublicInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicInfoRoutingModule { }
