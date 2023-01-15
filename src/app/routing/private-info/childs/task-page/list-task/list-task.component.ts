import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_PERSON, USER } from '../../local-admin/person/const';
import { PATH_TASK, TASK } from '../const';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  persons$: any = []
  serverErrorPerson$?: string;
  PATH = PATH_TASK

  listOfColumns: any[] = [
    {
      title: 'Заголовок',
      name: 'title',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.title.localeCompare(b.title),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      title: 'Описание',
      name: 'description',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.description.localeCompare(b.description),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      title: 'Срок по',
      name: 'deadline',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.deadline.localeCompare(b.deadline),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      title: 'ФИО инициатора',
      name: 'name',
      sortOrder: 'descend',
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['descend', null],
      filterCustom: true,
    }
  ];

  constructor(
    private personService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.personService.getList(TASK).subscribe({
      next: data => {
        console.log(data)
        this.persons$ = data.map((v: any) => ({
          key: v.id,
          title: v.title,
          description: v.description,
          deadline: v.deadline,
          name: v.person ? v.person?.firstName + ' ' + v.person?.lastName + ' ' + v.person?.middleName : 'Пусто',
        }))
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorPerson$ = err.error.message;
        } else {
          this.serverErrorPerson$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.personService.delete(id, USER).subscribe({
      next: data => {
        console.log(data)
        this.nzMessageService.info('Запись удалена');
        this.getList()
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorPerson$ = err.error.message;
        } else {
          this.serverErrorPerson$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }
}
