import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStatusTaskComponent } from './form-status-task/form-status-task.component';
import { ListStatusTaskComponent } from './list-status-task/list-status-task.component';

const routes: Routes = [
  {
    path: ':ID',
    component: FormStatusTaskComponent
  },
  {
    path: '',
    component: ListStatusTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTaskRoutingModule { }
