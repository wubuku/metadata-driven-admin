import {Injectable, Type} from '@angular/core';
import {Data, LoadChildren, PRIMARY_OUTLET, ResolveData, Route, Router, Routes, RunGuardsAndResolvers, UrlMatcher, UrlSegment} from '@angular/router';
import {equals} from '../util';

import {MaWildcardRouteComponent} from '../components/wildcard/ma-wildcard-route.component';
import {MaDynamicComponent} from '../components/dynamic/ma-dynamic.component';
import {MaRouteFinder} from './ma-route-finder';


@Injectable()
export class RouteFinder implements MaRouteFinder {

  private routes: Route[];
  private router: Router;
  constructor() {
  }

  initFinder(router: Router) {
    this.router = router;
    this.routes = this.mapRoutes(router.config);
  }


  findDeepestComponent(viewPath: string): Type<any> {
    return this.findDeepestComponent0(this.routes, viewPath);
  }


  /**
   * 查找最深一层的所有的静态视图
   */
  findStaticDeepestRoutes(): Route[] {
    const staticRoutes = [];

    const routes = [...this.routes];

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route.path.includes('*')) {
        continue;
      }
      if (route.children) {
        routes.push(...route.children.map(child => new RouteTree(child, route)));
      } else {
        staticRoutes.push(route);
      }
    }

    return staticRoutes;
  }

  private mapRoutes(routes: Route[]): Route[] {
    if (routes !== null) {
      const mappedRoutes = [];
      for (const route of routes) {
        const item = {...route};
        if (item.children) {
          item.children = this.mapRoutes(item.children);
        }
        if (item.component === MaWildcardRouteComponent) {
          item.component = MaDynamicComponent;
        }
        mappedRoutes.push(item);
      }
      return mappedRoutes;
    }
    return null;
  }


  /**
   * 查找路由最深一层的组件
   * @param routes
   * @param inputRoutePath 传入的参数必须以 '/' 开头
   */
  private findDeepestComponent0(routes: Route[], inputRoutePath: string) {
    for (const route of routes) {
      const routePath = '/' + route.path;

      if (routePath === inputRoutePath) {
        return route.component;
      }

      if (route.matcher) {
        const rootGroup = this.router.parseUrl(inputRoutePath).root;
        const primaryOutlet = rootGroup.children[PRIMARY_OUTLET];
        if (primaryOutlet) {
          const result = route.matcher(primaryOutlet.segments, primaryOutlet, route);
          const isEquals = equals<UrlSegment>(result.consumed, primaryOutlet.segments, (segment1, segment2) => segment1.path === segment2.path);
          if (isEquals) {
            return route.component;
          }
        }
      }


      // /management/interfaces - /management => /interfaces

      if (inputRoutePath.startsWith(routePath)) {
        if (routePath !== '/') {
          inputRoutePath = inputRoutePath.substring(routePath.length);
        }
      } else if (route.path !== '**') {
        continue;
      }

      if (route.children && route.children.length > 0) {
        const component = this.findDeepestComponent0(route.children, inputRoutePath);
        if (component) {
          return component;
        }
      }
      if (route.component) {
        return route.component;
      }
    }
  }
}


export class RouteTree implements Route {
  parent: Route;
  canActivate: any[];
  canActivateChild: any[];
  canDeactivate: any[];
  canLoad: any[];
  children: Routes;
  component: Type<any>;
  data: Data;
  loadChildren: LoadChildren;
  matcher: UrlMatcher;
  outlet: string;
  pathMatch: string;
  redirectTo: string;
  resolve: ResolveData;
  runGuardsAndResolvers: RunGuardsAndResolvers;


  _path: string;

  constructor(route: Route, parent: Route) {
    Object.assign(this, route);
    this.parent = parent;
  }


  set path(path: string) {
    this._path = path;
  }

  get path() {
    let path = this._path;
    if (this.parent) {
      const parentPath = this.parent.path;
      if (parentPath.endsWith('/')) {
        path = this.parent.path + path;
      } else {
        path = this.parent.path + '/' + path;
      }
    }
    return path;
  }
}
