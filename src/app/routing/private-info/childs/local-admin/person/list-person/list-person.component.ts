import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_PERSON, PERSON, USER } from '../const';


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  persons$: any = []
  serverErrorPerson$?: string;
  PATH = PATH_PERSON

  listOfColumns: any[] = [
    {
      title: 'ФИО',
      name: 'name',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterCustom: true,
    },
    {
      title: 'Имя пользователя',
      name: 'username',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.username.localeCompare(b.username),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      title: 'Отдел',
      name: 'departament',
      sortOrder: 'descend',
      sortFn: (a: any, b: any) => a.departament.localeCompare(b.departament),
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'test', value: 'test' },
        { text: 'admin', value: 'admin' }
      ],
      filterFn: (list: string[], item: any) => list.some(departament => item.departament.indexOf(departament) !== -1),
      filterMultiple: true
    },
    {
      title: 'Email',
      name: 'email',
      sortOrder: 'descend',
      sortFn: (a: any, b: any) => a.email.localeCompare(b.email),
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'test', value: 'test' },
        { text: 'admin', value: 'admin' }
      ],
      filterFn: (list: string[], item: any) => list.some(email => item.email.indexOf(email) !== -1),
      filterMultiple: true
    },
    {
      title: 'Роль',
      name: 'role',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: any, b: any) => a.role.localeCompare(b.role),
      filterMultiple: false,
      listOfFilter: [
        { text: 'admin', value: 'admin' },
        { text: 'local admin', value: 'local admin' }
      ],
      filterFn: (role: string, item: any) => item.role.indexOf(role) !== -1
    },
    {
      title: 'Должность',
      name: 'position',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: any, b: any) => a.position.localeCompare(b.position),
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (position: string, item: any) => item.position.indexOf(position) !== -1
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
    this.personService.getList(USER).subscribe({
      next: data => {
        console.log(data)
        this.persons$ = data.map((v: any) => ({
          key: v.id,
          name: v.person ? v.person?.firstName + ' ' + v.person?.lastName + ' ' + v.person?.middleName : 'Пусто',
          username: v.username,
          email: v.email,
          departament: v.person?.departament ? v.person.departament?.name : 'Не определено',
          role: v.roles.map((v: any)=>v.name).join(),
          position: v.person?.position ? v.person.position?.name : 'Не определено',
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
