import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';

const MENU_SITE='menu'

@Component({
  selector: 'app-form-menu-site',
  templateUrl: './form-menu-site.component.html',
  styleUrls: ['./form-menu-site.component.scss']
})
export class FormMenuSiteComponent implements OnInit {
  id: string = 'new'
  serverErrorMenu$?: string
  MENU_SITE = MENU_SITE
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
          this.organizationService.getOne(params['ID'], MENU_SITE).subscribe(
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
    this.serverErrorMenu$ = err
  }


}
