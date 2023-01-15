import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTypeTaskComponent } from './form-type-task/form-type-task.component';
import { ListTypeTaskComponent } from './list-type-task/list-type-task.component';

const routes: Routes = [
  {
    path: ':ID',
    component: FormTypeTaskComponent
  },
  {
    path: '',
    component: ListTypeTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeTaskRoutingModule { }
