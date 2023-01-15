import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/view-form/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_TYPE_TASK, TYPE_TASK } from '../../../const';

@Component({
  selector: 'app-form-type-task',
  templateUrl: './form-type-task.component.html',
  styleUrls: ['./form-type-task.component.scss']
})
export class FormTypeTaskComponent implements OnInit {
  id: string = 'new'
  serverErrorOrganizations$?: string
  ORGANIZATION = TYPE_TASK
  PATH = PATH_TYPE_TASK
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
          this.organizationService.getOne(params['ID'], TYPE_TASK).subscribe(
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
