import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss']
})
export class ListOrganizationsComponent implements OnInit {

  organizations$: any = []
  // serverErrorOrganizations$ = this.store$.pipe(select(getServerErrorOrganizations))

  serverErrorOrganizations$?: string;

  constructor(
    private organizationService: OrganizationService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.organizationService.getList().subscribe({
      next: data => {
        this.organizations$ = data;
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorOrganizations$ = JSON.parse(err.error).message;
        } else {
          this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.organizationService.delete(id).subscribe({
      next: data => {
        console.log(data)
        this.organizations$ = data;
        this.nzMessageService.info('Запись удалена');
        this.getList()
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorOrganizations$ = JSON.parse(err.error).message;
        } else {
          this.serverErrorOrganizations$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

}
