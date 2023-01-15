import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/organization/general.service';
import { StorageService } from 'src/app/services/user/storage.service';
import { DEPARTAMENT } from '../../childs/local-admin/departament/const';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed = false
  admin: boolean = false
  departaments$ = [
    {
      id: 1,
      name: "отдел"
    }
  ]

  constructor(
    private storageService: StorageService,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.admin = this.storageService.getRole().indexOf("ROLE_ADMIN") != -1 ? true : false;
    this.generalService.getList(DEPARTAMENT).subscribe({
      next: data => {
        this.departaments$ = data;
      },
      error: err => {
        console.log(err)
        // if (err.error) {
        //   this.serverErrorDepartaments$ = err.error.message;
        // } else {
        //   this.serverErrorDepartaments$ = "Ошибка со статусом: " + err.status;
        // }
      }
    });
  }

}
