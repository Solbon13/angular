import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formValue } from 'src/app/routing/private-info/ui-view/interface/interface';
import { GeneralService } from 'src/app/services/organization/general.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { DEPARTAMENT } from '../../departament/const';
import { POSITION_PERSON } from '../../position-person/const';
import { PATH_PERSON, ROLE, USER } from '../const';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  NEW_DOC = 'new';
  id: string = this.NEW_DOC;
  USER = USER
  PATH = PATH_PERSON
  serverErrorOrganizations$: string | undefined
  valueForm: formValue[] = []

  constructor(
    private activateRouter: ActivatedRoute,
    private generalService: GeneralService,
  ) {
    this.activateRouter.params
      .subscribe(params => {
        this.generalService.getList(ROLE).subscribe({
          next: roles => {
            this.generalService.getList(DEPARTAMENT).subscribe({
              next: departament => {
                this.generalService.getList(POSITION_PERSON).subscribe({
                  next: positionPerson => {
                    if (params['ID'] != this.NEW_DOC) {
                      this.generalService.getOne(params['ID'], USER).subscribe(
                        user => {
                          roles = roles.map((v: any) => ({
                            label: v.name,
                            value: v.name,
                            checked: Boolean(user.roles.find((role: any) => role.name === v.name))
                          }))
                          
                          console.log(user.roles)
                          this.id = params['ID']
                          if (user) {
                            this.valueForm = [
                              {
                                key: 'id',
                                value: user.id,
                                required: false,
                              },
                              {
                                key: 'username',
                                value: user.username,
                                required: true,
                                title: 'Имя пользователя',
                                type: 'text'
                              },
                              {
                                key: 'email',
                                value: user.email,
                                required: true,
                                title: 'Email',
                                type: 'text'
                              },
                              {
                                key: 'fastName',
                                value: user.person?.fastName,
                                required: true,
                                title: 'fastName',
                                type: 'text'
                              },
                              {
                                key: 'lastName',
                                value: user.person?.lastName,
                                required: true,
                                title: 'lastName',
                                type: 'text'
                              },
                              {
                                key: 'middleName',
                                value: user.person?.middleName,
                                required: true,
                                title: 'middleName',
                                type: 'text'
                              },
                              {
                                key: 'password',
                                value: '',
                                required: false,
                                title: 'Пароль',
                                type: 'password'
                              },
                              {
                                key: 'departament',
                                value: user.person?.departament.id,
                                required: true,
                                title: 'departament',
                                type: 'select',
                                list: departament
                              },
                              {
                                key: 'position',
                                value: user.person?.position?.id,
                                required: true,
                                title: 'positionPerson',
                                type: 'select',
                                list: positionPerson
                              },
                              {
                                key: 'role',
                                value: '',
                                required: true,
                                title: 'Роли',
                                type: 'check',
                                list: roles
                              }
                            ]
                          }
                        }
                      )
                    } else {
                      roles = roles.map((v: any) => ({
                        label: v.name,
                        value: v.name,
                        checked: false
                      }))
                      this.valueForm = [
                        {
                          key: 'id',
                          value: 0,
                          required: false,
                        },
                        {
                          key: 'username',
                          value: '',
                          required: true,
                          title: 'Имя пользователя',
                          type: 'text'
                        },
                        {
                          key: 'email',
                          value: '',
                          required: true,
                          title: 'Email',
                          type: 'text'
                        },
                        {
                          key: 'fastName',
                          value: '',
                          required: true,
                          title: 'fastName',
                          type: 'text'
                        },
                        {
                          key: 'lastName',
                          value: '',
                          required: true,
                          title: 'lastName',
                          type: 'text'
                        },
                        {
                          key: 'middleName',
                          value: '',
                          required: true,
                          title: 'middleName',
                          type: 'text'
                        },
                        {
                          key: 'password',
                          value: '',
                          required: true,
                          title: 'Пароль',
                          type: 'password'
                        },
                        {
                          key: 'departament_id',
                          value: 0,
                          required: true,
                          title: 'departament',
                          type: 'select',
                          list: departament
                        },
                        {
                          key: 'position_id',
                          value: 0,
                          required: true,
                          title: 'positionPerson',
                          type: 'select',
                          list: positionPerson
                        },
                        {
                          key: 'role',
                          value: '',
                          required: true,
                          title: 'Роли',
                          type: 'check',
                          list: roles
                        }
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
                })
              },
              error: err => {
                if (err.error) {
                  this.serverErrorOrganizations$ = err.error.message;
                } else {
                  this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
                }
              }
            })
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
