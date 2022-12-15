import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: ()=>import('./routing/private-info/private-info.module').then(m => m.PrivateInfoModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
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
