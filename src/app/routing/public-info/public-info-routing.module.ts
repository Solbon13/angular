import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInfoComponent } from './list-info/list-info.component';
import { PublicInfoComponent } from './public-info.component';

const routes: Routes = [
  {
    path: 'login',
    component: PublicInfoComponent,
    loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'list',
    component: ListInfoComponent
  },
  {
    path: '',
    component: PublicInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicInfoRoutingModule { }
