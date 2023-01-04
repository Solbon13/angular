import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { DEPARTAMENT, PATH_DEPARTAMENT } from '../const';


@Component({
  selector: 'app-list-departament',
  templateUrl: './list-departament.component.html',
  styleUrls: ['./list-departament.component.scss']
})
export class ListDepartamentComponent implements OnInit {
  departaments$: any = []
  serverErrorDepartaments$?: string;
  PATH: string = PATH_DEPARTAMENT

  constructor(
    private departamentService: GeneralService,
    private nzMessageService: NzMessageService
  ) {
  }
  
  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.departamentService.getList(DEPARTAMENT).subscribe({
      next: data => {
        this.departaments$ = data;
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorDepartaments$ = err.error.message;
        } else {
          this.serverErrorDepartaments$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.departamentService.delete(id, DEPARTAMENT).subscribe({
      next: data => {
        console.log(data)
        this.departaments$ = data;
        this.nzMessageService.info('Запись удалена');
        this.getList()
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorDepartaments$ = err.error.message;
        } else {
          this.serverErrorDepartaments$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

}
