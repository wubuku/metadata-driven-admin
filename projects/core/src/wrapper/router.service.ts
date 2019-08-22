import {Inject, Injectable, Type} from '@angular/core';
import {NavigationEnd, NavigationStart, Route, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {MA_ROUTER_INSPECTOR, MaRouterInspector} from './ma-router-inspector';

import {MaOptions} from '../service/ma-options';
import {MA_ROUTE_FINDER, MaRouteFinder} from './ma-route-finder';


@Injectable({providedIn: 'root'})
export class RouterService {

  private currentUri: string;

  public readonly baseRoute: string = '/';


  constructor(private router: Router, config: MaOptions,
              @Inject(MA_ROUTER_INSPECTOR) inspectors: MaRouterInspector[],
              @Inject(MA_ROUTE_FINDER) private routeFinder: MaRouteFinder) {

    this.onNavigationEnd(this.setActiveRoute);
    router.onSameUrlNavigation = 'reload';

    if (!router.config) {
      router.resetConfig([{component: config.frameComponent, path: ''}]);
    }

    inspectors.sort((inspector1, inspector2) => inspector1.order() - inspector2.order());

    for (const inspector of inspectors) {
      inspector.inspectRouterConfig(router, config.frameComponent);
    }

    this.routeFinder.initFinder(this.router);

    for (const route of router.config) {
      if (route.component === config.frameComponent) {
        this.baseRoute = route.path;
      }
    }
  }


  onNavigationEnd(next?: (event: NavigationEnd) => void): Subscription {
    return this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(next);
  }

  onNavigationStart(next?: (event: NavigationStart) => void): Subscription {
    return this.router.events.pipe(filter(evt => evt instanceof NavigationStart)).subscribe(next);
  }


  /**
   * 返回一个去掉首字符（'/'）的url
   */
  getContentComponentRoute() {
    const relativeUri = this.getCurrentRouterUri();
    return this.baseRoute ?
      relativeUri.replace('/' + this.baseRoute + '/', '') :
      relativeUri.replace('/' + this.baseRoute, '');
  }

  navigate(viewPath: string) {
    return this.router.navigateByUrl(this.patchQualifiedPath(viewPath));
  }

  reload() {
    const shouldReuseRoute = this.router.routeReuseStrategy.shouldReuseRoute;
    this.router.routeReuseStrategy.shouldReuseRoute = neverReuseRoute;
    this.router.navigateByUrl(this.currentUri).then(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
    });
  }


  isActive(viewPath: string): boolean {
    return this.currentUri === this.patchQualifiedPath(viewPath);
  }

  getContentComponent(viewPath: string): Type<any> {
    return this.routeFinder.findDeepestComponent(this.patchQualifiedPath(viewPath));
  }


  /**
   * 查找最深一层的所有的静态视图
   */
  findStaticDeepestRoutes(): Route[] {
    return this.routeFinder.findStaticDeepestRoutes();
  }


  /**
   * @param viewPath 必须以`/`开头
   */
  private patchQualifiedPath(viewPath: string) {
    return this.baseRoute ? '/' + this.baseRoute + viewPath : viewPath;
  }


  private setActiveRoute = () => {
    this.currentUri = this.getCurrentRouterUri();
  }

  private getCurrentRouterUri() {
    let relativeUri = decodeURIComponent(this.router.url);
    const i1 = relativeUri.indexOf('?');
    const i2 = relativeUri.indexOf(';');
    const i3 = relativeUri.indexOf('#');
    const indexes = [i1, i2, i3].filter(i => i > 0);
    if (indexes.length > 0) {
      const index = Math.min(...indexes);
      relativeUri = relativeUri.substring(0, index);
    }
    return relativeUri;
  }
}

const neverReuseRoute = () => false;
