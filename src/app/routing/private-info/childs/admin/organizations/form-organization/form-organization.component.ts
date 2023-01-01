import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  serverErrorOrganizations$?: string

  submitForm(): void {
    if (this.id === 'new')
      this.organizationService.create(this.validateForm.value).subscribe({
        next: data => {
          console.log(data);
          this.nzMessageService.info('Запись добавлена');
        },
        error: err => {
          if (err.error) {
            this.serverErrorOrganizations$ = JSON.parse(err.error).message;
          } else {
            this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
          }
        }
      });
    else
      this.organizationService.update(this.validateForm.value, this.id).subscribe({
        next: data => {
          console.log(data);
          this.nzMessageService.info('Запись изменена');
        },
        error: err => {
          if (err.error) {
            this.serverErrorOrganizations$ = JSON.parse(err.error).message;
          } else {
            this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
          }
        }
      });
  }

  constructor(
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private organizationService: OrganizationService,
    private nzMessageService: NzMessageService
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
              this.id = params['ID']
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
