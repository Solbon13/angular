import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPositionPersonComponent } from './form-position-person/form-position-person.component';
import { ListPositionPersonComponent } from './list-position-person/list-position-person.component'

const routes: Routes = [
    {
    path: ':ID',
    component: FormPositionPersonComponent
    // loadChildren: ()=>import('./form-departament/form-departament.module').then(m=>m.FormDepartamentModule)
  },
  {
    path: '',
    component: ListPositionPersonComponent
    // component: ()=>import('./list-position-person/list-position-person.module').then(m=>m.ListPositionPersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionPersonRoutingModule { }
