import {InjectionToken, Type} from '@angular/core';
import {Route, Router} from '@angular/router';

export interface MaRouteFinder {

  initFinder(router: Router);

  findDeepestComponent(viewPath: string): Type<any>;

  findStaticDeepestRoutes(): Route[];
}

export const MA_ROUTE_FINDER = new InjectionToken<MaRouteFinder>('MA_ROUTE_FINDER');
