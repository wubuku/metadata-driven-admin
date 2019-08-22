import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgZorroAntdModule, NZ_ICONS} from 'ng-zorro-antd';
import {icons} from '../../service/icons';
import {AuthenticationService} from '../../service/authentication.service';
import {TokenInterceptor} from '../../service/token.interceptor';

import {LoginComponent} from '../../components/login/login.component';
import {HomeComponent} from '../../components/home/home.component';
import {WarehousesComponent} from '../../components/warehouses/warehouses.component';

import {MaCoreModule, AuthorizationModule, LOGGED_IN_USER_HOLDER} from '../../import-proxy';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    WarehousesComponent,
  ],
  entryComponents: [
    LoginComponent,
    HomeComponent,
    WarehousesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaCoreModule.forRoot({appId: 'authorization-demo', frameComponent: HomeComponent}),
    RouterModule.forRoot([
      {component: LoginComponent, path: 'login'},
      {
        component: HomeComponent,
        path: '',
        children: [
          {component: WarehousesComponent, path: 'Warehouses'},
        ]
      },
    ]),
    AuthorizationModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: LOGGED_IN_USER_HOLDER, useClass: AuthenticationService},
    {provide: NZ_ICONS, useValue: icons}
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaCoreModule,
    RouterModule,
    AuthorizationModule,
  ]
})
export class AuthorizationDemoModule {
}
