import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInfoComponent } from './list-info.component';

const routes: Routes = [
  {
    path: '',
    component: ListInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListInfoRoutingModule { }
