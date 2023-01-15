import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { GeneralService } from 'src/app/services/organization/general.service';
import { StorageService } from 'src/app/services/user/storage.service';
import { formValue } from '../../../ui-view/view-form/interface/interface';
import { TYPE_TASK } from '../../directory/const';
import { PERSON } from '../../local-admin/person/const';
import { PATH_TASK, TASK } from '../const';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  id: string = 'new'
  serverError$?: string
  currentModule = TASK
  PATH = PATH_TASK
  filesTask: NzUploadFile[] = []
  valueForm: formValue[] = []

  constructor(
    private activateRouter: ActivatedRoute,
    private generalService: GeneralService,
    private storageService: StorageService
  ) {
    this.activateRouter.params
      .subscribe(params => {
        generalService.getList(PERSON).subscribe(
          person$ => {
            console.log(person$)
            generalService.getList(TYPE_TASK).subscribe(
              type_task$ => {
                if (params['ID'] != 'new')
                  this.generalService.getOne(params['ID'], this.currentModule).subscribe(
                    data => {
                      this.filesTask = data.files.map((v: any)=> ({
                        uid: v.id,
                        name: v.filenameClient,
                        status: 'done'
                      }))
                      this.id = params['ID']
                      console.log('a', data)
                      if (data) {
                        this.valueForm = [
                          {
                            key: 'id',
                            value: data?.id,
                            required: true,
                          },
                          {
                            key: 'title',
                            value: data?.title,
                            required: true,
                            title: 'Заголовок',
                            type: 'text'
                          },
                          {
                            key: 'description',
                            value: data?.description,
                            required: true,
                            title: 'Описание',
                            type: 'textarea'
                          },
                          {
                            key: 'phone',
                            value: data?.phone,
                            required: true,
                            title: 'Контактные данные',
                            type: 'text'
                          },
                          {
                            key: 'deadline',
                            value: data?.deadline,
                            required: false,
                            title: 'Срок по',
                            type: 'date'
                          },
                          {
                            key: 'typeTaskId',
                            value: data?.typeTask?.id,
                            required: true,
                            title: 'Тип задания',
                            type: 'select',
                            listField: 'name',
                            list: type_task$
                          },
                          {
                            key: 'person_id',
                            value: data?.person?.id,
                            disabled: data?.person?.id,
                            required: true,
                            title: 'Инициатор',
                            // type: 'text',
                          },
                          {
                            key: 'executor',
                            value: data?.executor,
                            required: false,
                            title: 'Испольнитель',
                            type: 'table',
                            list: data?.executor,
                            listSelect: person$
                          },
                          {
                            key: 'files',
                            value: '',
                            required: false,
                            title: 'Файлы',
                            type: 'file',
                            list: this.filesTask
                          },
                        ]
                      }
                      console.log('form', this.valueForm)
                    }
                  )
                else {
                  this.valueForm = [
                    {
                      key: 'id',
                      value: 0,
                      required: false,
                    },
                    {
                      key: 'title',
                      value: '',
                      required: true,
                      title: 'Заголовок',
                      type: 'text'
                    },
                    {
                      key: 'description',
                      value: '',
                      required: true,
                      title: 'Описание',
                      type: 'textarea'
                    },
                    {
                      key: 'phone',
                      value: '',
                      required: true,
                      title: 'Контактные данные',
                      type: 'text'
                    },
                    {
                      key: 'deadline',
                      value: '',
                      required: false,
                      title: 'Срок по',
                      type: 'date'
                    },
                    {
                      key: 'typeTaskId',
                      value: 2,// по умолчанию заявка
                      required: true,
                      title: 'Тип задания',
                      type: 'select',
                      listField: 'name',
                      list: type_task$
                    },
                    {
                      key: 'person_id',
                      value: storageService.getUser().id,
                      disabled: true,
                      required: true,
                      title: 'Инициатор',
                      type: 'text',
                    },
                    {
                      key: 'executor',
                      value: [],
                      required: false,
                      title: 'Испольнитель',
                      type: 'table',
                      list: [],
                      listSelect: person$
                    },
                    {
                      key: 'files',
                      value: [],
                      required: false,
                      title: 'Файлы',
                      type: 'file',
                      list: []
                    },
                  ]
                }
              })
          }
        )
      })
  }

  ngOnInit(): void {
  }

  onIsError(err: string) {
    this.serverError$ = err
  }

}
