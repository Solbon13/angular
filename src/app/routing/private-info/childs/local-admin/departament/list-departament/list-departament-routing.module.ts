import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartamentComponent } from './list-departament.component';

const routes: Routes = [
  {
    path: '',
    component: ListDepartamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDepartamentRoutingModule { }
