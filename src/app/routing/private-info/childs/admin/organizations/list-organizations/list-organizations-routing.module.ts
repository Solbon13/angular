import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrganizationsComponent } from './list-organizations.component';

const routes: Routes = [
  {
    path: '',
    component: ListOrganizationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOrganizationsRoutingModule { }
