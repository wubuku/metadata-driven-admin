import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {MA_MENU_CUSTOMIZER, MA_MENU_ACCESS_DECISION_MANAGER, MA_ROUTER_INSPECTOR, MaCoreModule} from './ma-core-proxy';


import {UserManagementComponent} from './comonents/user/user-management.component';
import {GroupManagementComponent} from './comonents/group/group-management.component';
import {AuthorityMenuCustomizer} from './service/authority-menu-customizer';
import {AuthorizationRouterInspector} from './service/authorization-router-inspector';
import {AuthorityComponent} from './comonents/authority/authority.component';
import {DefaultMenuAccessDecisionManager} from './service/default-menu-access-decision-manager';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaCoreModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  providers: [
    {provide: MA_ROUTER_INSPECTOR, useClass: AuthorizationRouterInspector, multi: true},
    {provide: MA_MENU_CUSTOMIZER, useClass: AuthorityMenuCustomizer, multi: true},
    {provide: MA_MENU_ACCESS_DECISION_MANAGER, useClass: DefaultMenuAccessDecisionManager},
  ],
  entryComponents: [
    UserManagementComponent,
    GroupManagementComponent,
  ],
  declarations: [
    UserManagementComponent,
    GroupManagementComponent,
    AuthorityComponent,
  ]
})
export class AuthorizationModule { }
