import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'status',
    loadChildren: ()=>import('./status-task/status-task.module').then(m=>m.StatusTaskModule)
  },
  {
    path: 'type',
    loadChildren: ()=>import('./type-task/type-task.module').then(m=>m.TypeTaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
