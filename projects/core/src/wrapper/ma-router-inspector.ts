import {InjectionToken, Type} from '@angular/core';
import {Router} from '@angular/router';

export abstract class MaRouterInspector {
  order(): number {
    return 0;
  }

  abstract inspectRouterConfig(router: Router, frameComponent: Type<any>);
}

export const MA_ROUTER_INSPECTOR = new InjectionToken<MaRouterInspector>('MA_ROUTER_INSPECTOR');



