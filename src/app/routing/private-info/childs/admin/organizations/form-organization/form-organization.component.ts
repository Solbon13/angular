import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/view-form/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';
import { ORGANIZATION, PATH_ORGANIZATION } from '../const';


@Component({
  selector: 'app-form-organization',
  templateUrl: './form-organization.component.html',
  styleUrls: ['./form-organization.component.scss']
})
export class FormOrganizationComponent implements OnInit {
  id: string = 'new'
  serverErrorOrganizations$?: string
  ORGANIZATION = ORGANIZATION
  PATH = PATH_ORGANIZATION
  valueForm: formValue[] = [
    {
      key: 'id',
      value: 0,
      required: false,
    },
    {
      key: 'name',
      value: '',
      required: true,
      title: 'Наименование',
      type: 'text'
    },
  ]

  constructor(
    private activateRouter: ActivatedRoute,
    private organizationService: GeneralService,
  ) {
    this.activateRouter.params
      .subscribe(params => {
        if (params['ID'] != 'new')
          this.organizationService.getOne(params['ID'], ORGANIZATION).subscribe(
            org => {
              this.id = params['ID']
              if (org)
                this.valueForm = [
                  {
                    key: 'id',
                    value: org?.id,
                    required: true,
                  },
                  {
                    key: 'name',
                    value: org?.name,
                    required: true,
                    title: 'Наименование',
                    type: 'text'
                  },
                ]
            }
          )
      })
  }

  ngOnInit(): void {
  }

  onIsError(err: string) {
    this.serverErrorOrganizations$ = err
  }

}
