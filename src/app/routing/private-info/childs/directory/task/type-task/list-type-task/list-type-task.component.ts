import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_TYPE_TASK, TYPE_TASK } from '../../../const';

@Component({
  selector: 'app-list-type-task',
  templateUrl: './list-type-task.component.html',
  styleUrls: ['./list-type-task.component.scss']
})
export class ListTypeTaskComponent implements OnInit {
  organizations$: any = []
  serverErrorOrganizations$?: string;
  PATH = PATH_TYPE_TASK
  
  constructor(
    private organizationService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.organizationService.getList(TYPE_TASK).subscribe({
      next: data => {
        this.organizations$ = data;
      },
      error: err => {
        if (err.error) {
          this.serverErrorOrganizations$ = err.error.message;
        } else {
          this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.nzMessageService.info('Удаление запрещено');
  }

}
