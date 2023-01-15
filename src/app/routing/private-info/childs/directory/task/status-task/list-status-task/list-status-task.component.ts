import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { PATH_STATUS_TASK, STATUS_TASK } from '../../../const';

@Component({
  selector: 'app-list-status-task',
  templateUrl: './list-status-task.component.html',
  styleUrls: ['./list-status-task.component.scss']
})
export class ListStatusTaskComponent implements OnInit {
  organizations$: any = []
  serverErrorOrganizations$?: string;
  PATH = PATH_STATUS_TASK
  
  constructor(
    private organizationService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.organizationService.getList(STATUS_TASK).subscribe({
      next: data => {
        this.organizations$ = data;
      },
      error: err => {
        console.log(err.error)
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
