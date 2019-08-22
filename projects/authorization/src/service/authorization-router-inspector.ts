import {Injectable, Type} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MaRouterInspector} from '../ma-core-proxy';


import {UserManagementComponent} from '../comonents/user/user-management.component';
import {GroupManagementComponent} from '../comonents/group/group-management.component';


@Injectable()
export class AuthorizationRouterInspector extends MaRouterInspector {

  inspectRouterConfig(router: Router, frameComponent: Type<any>) {
    for (const route of router.config) {
      if (route.component === frameComponent) {
        const children: Route[] = [];

        children.push({
          path: 'authorization',
          children: [
            {component: UserManagementComponent, path: 'users'},
            {component: GroupManagementComponent, path: 'groups'},
          ]
        });

        if (route.children) {
          children.push(...route.children);
        }

        route.children = children;
      }
    }
  }

}
