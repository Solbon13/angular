import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOrganizationComponent } from './form-organization.component';

const routes: Routes = [
  {
    path: '',
    component: FormOrganizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormOrganizationRoutingModule { }
