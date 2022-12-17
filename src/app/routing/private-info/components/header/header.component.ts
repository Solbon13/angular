import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { StorageService } from 'src/app/services/user/storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed = false
  @Output() collapsed = new EventEmitter()
  // user$ = this.store$.pipe(select(getAuthUserName))

  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  clickCollapsed() {
    this.collapsed.emit()
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.router.navigateByUrl('/')
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
