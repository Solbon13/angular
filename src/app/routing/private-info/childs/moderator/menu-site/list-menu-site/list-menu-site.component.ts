import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';
import { MENU_SITE, PATH_MENU_SITE } from '../const';


@Component({
  selector: 'app-list-menu-site',
  templateUrl: './list-menu-site.component.html',
  styleUrls: ['./list-menu-site.component.scss']
})
export class ListMenuSiteComponent implements OnInit {

  positionMenu$: any = []
  serverErrorMenu$?: string;
  PATH = PATH_MENU_SITE

  constructor(
    private menuSiteService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.menuSiteService.getList(MENU_SITE).subscribe({
      next: data => {
        this.positionMenu$ = data;
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorMenu$ = err.error.message;
        } else {
          this.serverErrorMenu$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

  confirm(id: string): void {
    this.menuSiteService.delete(id, MENU_SITE).subscribe({
      next: data => {
        console.log(data)
        this.positionMenu$ = data;
        this.nzMessageService.info('Запись удалена');
        this.getList()
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.serverErrorMenu$ = err.error.message;
        } else {
          this.serverErrorMenu$ = "Ошибка со статусом: " + err.status;
        }
      }
    });
  }

}
