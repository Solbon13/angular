import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/user/storage.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed = false
  admin: boolean = false
  departaments = [
    {
      id: 1,
      name: "отдел"
    }
  ]

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.admin = this.storageService.getRole().indexOf("ROLE_ADMIN") != -1 ? true : false;
  }

}
