import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDepartamentComponent } from "./form-departament.component";

const routes: Routes = [
  {
    path: '',
    component: FormDepartamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDepartamentRoutingModule { }
