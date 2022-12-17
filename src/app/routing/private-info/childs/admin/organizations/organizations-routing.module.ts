import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOrganizationComponent } from './form-organization/form-organization.component';
import { ListOrganizationsComponent } from './list-organizations/list-organizations.component';

const routes: Routes = [
  {
    path: ':ID',
    loadChildren: ()=>import('./form-organization/form-organization.module').then(m=>m.FormOrganizationModule)
  },
  {
    path: '',
    loadChildren: ()=>import('./list-organizations/list-organizations.module').then(m=>m.ListOrganizationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
