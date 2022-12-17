import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/services/user/auth.service';
import { StorageService } from 'src/app/services/user/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  isLoggedIn = false;
  isLoad = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private message: NzMessageService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigateByUrl('/private')
    }

    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }


  onSubmit(): void {

    if (this.validateForm.valid) {
      this.isLoad = true
      this.authService.login(this.validateForm.value['username'], this.validateForm.value['password']).subscribe({
        next: data => {
          this.storageService.saveUser(data);

          this.isLoginFailed = false;
          this.isLoad = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          // this.reloadPage();
      this.router.navigateByUrl('/private')
    },
        error: err => {
          console.log(err)
          this.errorMessage = err.error.message;
          if (err.status == 0) this.errorMessage = "Ошибка соединения с сервером";
          this.isLoginFailed = true;
          this.isLoad = false;
          this.message.create('error', this.errorMessage);
        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}
