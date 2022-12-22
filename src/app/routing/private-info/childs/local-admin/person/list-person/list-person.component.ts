import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';

const PERSON='person'


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  persons$: any = []
  serverErrorPerson$?: string;
  PATH = '/private/local-admin/person/'

  constructor(
    private personService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.personService.getList(PERSON).subscribe({
      next: data => {
        this.persons$ = data;
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
    this.personService.delete(id, PERSON).subscribe({
      next: data => {
        console.log(data)
        this.persons$ = data;
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
