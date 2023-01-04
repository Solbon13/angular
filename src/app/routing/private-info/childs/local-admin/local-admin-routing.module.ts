import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEPARTAMENT, PATH_DEPARTAMENT } from './departament/const';

const routes: Routes = [
  {
    path: 'departaments',
    loadChildren: ()=>import('./departament/departament.module').then(m=>m.DepartamentModule)
  },
  {
    path: 'person',
    loadChildren: ()=>import('./person/person.module').then(m=>m.PersonModule)
  },
  {
    path: 'position',
    loadChildren: ()=>import('./position-person/position-person.module').then(m=>m.PositionPersonModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalAdminRoutingModule { }
