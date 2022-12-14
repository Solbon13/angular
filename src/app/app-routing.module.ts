import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: ()=>import('./routing/private-info/private-info.module').then(m => m.PrivateInfoModule),
  },
  {
    path: '',
    loadChildren: ()=>import('./routing/public-info/public-info.module').then(m => m.PublicInfoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
