import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization/organization.service';


@Component({
  selector: 'app-form-organization',
  templateUrl: './form-organization.component.html',
  styleUrls: ['./form-organization.component.scss']
})
export class FormOrganizationComponent implements OnInit {
  validateForm: FormGroup;
  id: string = 'new'
  uploading = false

  submitForm(): void {
          console.log(this.validateForm.value);
          if (this.id === 'new')
      this.organizationService.create(this.validateForm.value).subscribe({
        next: data => {
          console.log(data);
        },
        error: err => {
          console.log(err);
        }
      });
    // else
    //   this.store$.dispatch(updateOrg(this.validateForm.value))
    // this.router.navigateByUrl('/backgrounds/organizations')
  }

  constructor(
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private organizationService: OrganizationService,
    private router: Router
    ) {
    this.validateForm = this.fb.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.activateRouter.params
    .subscribe(params => {
      if (params['ID'] != 'new')
      this.organizationService.getOne(params['ID']).subscribe(
        org => {
          this.id=params['ID']
          if (org)
            this.validateForm = this.fb.group({
              id: [org?.id, [Validators.required]],
              name: [org?.name, [Validators.required]],
            });
        }
      )
    })
  }

  ngOnInit(): void {
  }

}
