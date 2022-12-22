import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';

const POSITION_PERSON='position'


@Component({
  selector: 'app-list-position-person',
  templateUrl: './list-position-person.component.html',
  styleUrls: ['./list-position-person.component.scss']
})
export class ListPositionPersonComponent implements OnInit {

  positionPersons$: any = []
  serverErrorPositionPerson$?: string;
  PATH = '/private/local-admin/position/'

  constructor(
    private positionPersonService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.positionPersonService.getList(POSITION_PERSON).subscribe({
      next: data => {
        this.positionPersons$ = data;
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorPositionPerson$ = err.error.message;
        } else {
          this.serverErrorPositionPerson$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.positionPersonService.delete(id, POSITION_PERSON).subscribe({
      next: data => {
        console.log(data)
        this.positionPersons$ = data;
        this.nzMessageService.info('Запись удалена');
        this.getList()
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorPositionPerson$ = err.error.message;
        } else {
          this.serverErrorPositionPerson$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

}
