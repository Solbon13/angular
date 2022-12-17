import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss']
})
export class ListOrganizationsComponent implements OnInit {

  organizations$: any = []
  // serverErrorOrganizations$ = this.store$.pipe(select(getServerErrorOrganizations))

  content?: string;

  constructor(
    private organizationService: OrganizationService
  ) { }
  
  ngOnInit(): void {
    this.organizationService.getList().subscribe({
      next: data => {
        console.log(data)
        this.organizations$ = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }

}
