import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/view-form/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_POSITION_PERSON, POSITION_PERSON } from '../const';

@Component({
  selector: 'app-form-position-person',
  templateUrl: './form-position-person.component.html',
  styleUrls: ['./form-position-person.component.scss']
})
export class FormPositionPersonComponent implements OnInit {

  id: string = 'new'
  POSITION_PERSON = POSITION_PERSON
  PATH = PATH_POSITION_PERSON
  serverErrorPositions$?: string
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
    private positionService: GeneralService,
  ) {
    this.activateRouter.params
      .subscribe(params => {
        if (params['ID'] != 'new')
          this.positionService.getOne(params['ID'], POSITION_PERSON).subscribe(
            org => {
              this.id = params['ID']
              if (org)
                this.valueForm = [
                  {
                    key: 'id',
                    value: org?.id,
                    required: false,
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
    this.serverErrorPositions$ = err
  }

}
