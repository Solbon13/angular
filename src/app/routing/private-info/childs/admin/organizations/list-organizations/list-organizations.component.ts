import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/organization/general.service';
import { NzMessageService } from 'ng-zorro-antd/message';

const ORGANIZATION='organization'


@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss']
})
export class ListOrganizationsComponent implements OnInit {

  organizations$: any = []
  serverErrorOrganizations$?: string;
  PATH = '/private/admin/organizations/'
  
  constructor(
    private organizationService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.organizationService.getList(ORGANIZATION).subscribe({
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
    this.organizationService.delete(id, ORGANIZATION).subscribe({
      next: data => {
        this.organizations$ = data;
        this.nzMessageService.info('Запись удалена');
        this.getList()
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

}
