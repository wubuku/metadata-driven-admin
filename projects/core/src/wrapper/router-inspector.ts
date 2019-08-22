import {MaRouterInspector} from './ma-router-inspector';
import {Injectable, Type} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MaSettingComponent} from '../components/management/setting/ma-setting.component';
import {MaIconManagementComponent} from '../components/management/icon/ma-icon-management.component';
import {MaMenuManagementComponent} from '../components/management/menu/ma-menu-management.component';
import {MaViewManagementComponent} from '../components/management/view/ma-view-management.component';
import {MaInterfaceListComponent} from '../components/management/interface/ma-interface-list.component';
import {MaWildcardRouteComponent} from '../components/wildcard/ma-wildcard-route.component';

@Injectable()
export class RouterInspector extends MaRouterInspector {

  inspectRouterConfig(router: Router, frameComponent: Type<any>) {
    for (const route of router.config) {
      if (route.component === frameComponent) {
        const children: Route[] = [];

        children.push({
          path: 'management',
          children: [
            {component: MaSettingComponent, path: 'setting'},
            {component: MaIconManagementComponent, path: 'icons'},
            {component: MaMenuManagementComponent, path: 'menus'},
            {component: MaViewManagementComponent, path: 'views'},
            {component: MaInterfaceListComponent, path: 'interfaces'},
          ]
        });
        if (route.children) {
          children.push(...route.children);
        }
        route.children = children;
        route.children.push({component: MaWildcardRouteComponent, path: '**'});
      }
    }
  }

  order(): number {
    return Number.MAX_SAFE_INTEGER;
  }

}
