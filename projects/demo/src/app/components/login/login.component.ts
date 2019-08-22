import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" style="max-width: 330px;padding: 15px;margin: 60px auto;">
      <h2 class="form-signin-heading">Please sign in</h2>
      
      <nz-form-item>
        <nz-form-control>
          <ng-template #user><i nz-icon type="user"></i></ng-template>
          <nz-input-group [nzPrefix]="user">
            <input type="text" nz-input formControlName="username" placeholder="用户名">
          </nz-input-group>
          <nz-form-explain *ngIf="validateForm.get('username').dirty && validateForm.get('username').errors">请输入用户名！
          </nz-form-explain>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <ng-template #lock><i nz-icon type="lock"></i></ng-template>
          <nz-input-group [nzPrefix]="lock">
            <input type="password" nz-input formControlName="password">
          </nz-input-group>
          <nz-form-explain *ngIf="validateForm.get('password').dirty && validateForm.get('password').errors">请输入密码
          </nz-form-explain>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button class="login-form-button" [nzType]="'primary'" style="width: 100%">登录</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;


  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const body = this.validateForm.value;
      this.auth.authenticate(body.username, body.password);
    }
  }

}
