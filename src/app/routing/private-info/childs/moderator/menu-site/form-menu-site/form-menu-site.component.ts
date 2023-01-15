import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/view-form/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';
import { ORGANIZATION } from '../../../admin/organizations/const';
import { MENU_SITE, PATH_MENU_SITE } from '../const';


@Component({
  selector: 'app-form-menu-site',
  templateUrl: './form-menu-site.component.html',
  styleUrls: ['./form-menu-site.component.scss']
})
export class FormMenuSiteComponent implements OnInit {
  id: string = 'new'
  serverErrorMenu$?: string
  MENU_SITE = MENU_SITE
  PATH = PATH_MENU_SITE
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
    private generalService: GeneralService,
  ) {
    this.activateRouter.params
      .subscribe(params => {
        this.generalService.getList(ORGANIZATION).subscribe({
          next: data => {
            if (params['ID'] != 'new')
              this.generalService.getOne(params['ID'], MENU_SITE).subscribe(
                menuSite => {
                  this.id = params['ID']
                  if (menuSite)
                    this.valueForm = [
                      {
                        key: 'id',
                        value: menuSite?.id,
                        required: true,
                      },
                      {
                        key: 'org_id',
                        value: menuSite.organization?.id,
                        required: true,
                        title: 'Организация',
                        type: 'select',
                        listField: 'name',
                        list: data
                      },
                      {
                        key: 'name',
                        value: menuSite?.name,
                        required: true,
                        title: 'Наименование',
                        type: 'text'
                      },
                    ]
                }
              )
              else
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
                  listField: 'name',
                  list: data
                },
                {
                  key: 'name',
                  value: '',
                  required: true,
                  title: 'Наименование',
                  type: 'text'
                }
              ]
          },
          error: err => {
            if (err.error) {
              this.serverErrorMenu$ = err.error.message;
            } else {
              this.serverErrorMenu$ = "Ошибка со статусом: " + err.status;
            }
          }
        })
      })
  }

  ngOnInit(): void {
  }

  onIsError(err: string) {
    this.serverErrorMenu$ = err
  }


}
