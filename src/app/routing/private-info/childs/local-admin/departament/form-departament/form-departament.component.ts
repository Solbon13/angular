import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';

const DEPARTAMENT='departament'
const ORGANIZATION='organization'


@Component({
  selector: 'app-form-departament',
  templateUrl: './form-departament.component.html',
  styleUrls: ['./form-departament.component.scss']
})
export class FormDepartamentComponent implements OnInit {
  NEW_DOC = 'new';
  id: string = this.NEW_DOC;
  DEPARTAMENT = DEPARTAMENT
  serverErrorOrganizations$: string | undefined
  valueForm: formValue[] = []
  
  constructor(
    private activateRouter: ActivatedRoute,
    private organizationService: GeneralService,
    private departamentService: GeneralService,
  ) {
    this.activateRouter.params
      .subscribe(params => {
        this.organizationService.getList(ORGANIZATION).subscribe({
          next: data => {
            if (params['ID'] != this.NEW_DOC){
              this.departamentService.getOne(params['ID'], DEPARTAMENT).subscribe(
                departament => {
                  this.id = params['ID']
                  if (departament)
                  this.valueForm = [
                      {
                        key: 'id',
                        value: departament.id,
                        required: false,
                      },
                      {
                        key: 'org_id',
                        value: departament.organization?.id,
                        required: true,
                        title: 'Организация',
                        type: 'select',
                        list: data
                      },
                      {
                        key: 'name',
                        value: departament.name,
                        required: true,
                        title: 'Наименование',
                        type: 'text'
                      },
                      {
                        key: 'address',
                        value: departament.address,
                        required: false,
                        title: 'Адрес',
                        type: 'text'
                      },
                      {
                        key: 'phone',
                        value: departament.phone,
                        required: false,
                        title: 'Телефон',
                        type: 'text'
                      },
                    ]
                }
              )
            } else {
              this.valueForm = [
                {
                  key: 'id',
                  value: 0,
                  required: false,
                },
                {
                  key: 'org_id',
                  value: '',
                  required: true,
                  title: 'Организация',
                  type: 'select',
                  list: data
                },
                {
                  key: 'name',
                  value: '',
                  required: true,
                  title: 'Наименование',
                  type: 'text'
                },
                {
                  key: 'address',
                  value: '',
                  required: false,
                  title: 'Адрес',
                  type: 'text'
                },
                {
                  key: 'phone',
                  value: '',
                  required: false,
                  title: 'Телефон',
                  type: 'text'
                },
              ]
            }
          },
          error: err => {
            if (err.error) {
              this.serverErrorOrganizations$ = err.error.message;
            } else {
              this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
            }
          }
        });
      });
  }

  ngOnInit(): void {
  }

  onIsError(err: string) {
    this.serverErrorOrganizations$ = err
  }

}
