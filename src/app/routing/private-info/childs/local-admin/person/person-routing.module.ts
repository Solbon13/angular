import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './list-person/list-person.component'

const routes: Routes = [
  // {
  //   path: ':ID',
  //   loadChildren: ()=>import('./form-departament/form-departament.module').then(m=>m.FormDepartamentModule)
  // },
  {
    path: '',
    component: ListPersonComponent
    // loadChildren: ()=>import('./list-person/list-person.module').then(m=>m.ListPersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
