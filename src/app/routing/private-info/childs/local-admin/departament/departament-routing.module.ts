import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':ID',
    loadChildren: ()=>import('./form-departament/form-departament.module').then(m=>m.FormDepartamentModule)
  },
  {
    path: '',
    loadChildren: ()=>import('./list-departament/list-departaments.module').then(m=>m.ListDepartamentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule { }
