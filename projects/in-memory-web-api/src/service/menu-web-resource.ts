import {WebResource} from './web-resource';
import {RequestInfo} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {HttpRequest} from '@angular/common/http';

const MENUS = [
  {
    'language': 'zh',
    'path': '#inout',
    'index': 5,
    'icon': {'type': 'swap'},
    'displayName': '入库 / 出库管理',
    'description': '入库 / 出库管理',
    'children': [{'language': 'zh', 'path': '/InOuts', 'index': 0, 'displayName': '出入库', 'description': '出入库', 'parent': '#inout'}]
  }, {
    'language': 'zh',
    'path': '#warehouse',
    'index': 10,
    'icon': {'type': 'database'},
    'displayName': '仓库管理',
    'description': '仓库管理',
    'children': [
      {'language': 'zh', 'path': '/Warehouses', 'index': 0, 'displayName': '仓库', 'description': '仓库', 'parent': '#warehouse'},
      {'language': 'zh', 'path': '/Locators', 'index': 1, 'displayName': '货位', 'description': '货位', 'parent': '#warehouse'},
      {'language': 'zh', 'path': '/LocatorTypes', 'index': 2, 'displayName': '货位类型', 'description': '货位类型', 'parent': '#warehouse'},
      {'language': 'zh', 'path': '/Facilities', 'index': 3, 'displayName': '设施', 'description': '设施', 'parent': '#warehouse'}]
  }
];

@Injectable()
export class MenuWebResource extends WebResource {
  constructor() {
    super('menus', MENUS);
  }

  post(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const {menus, forceUpdate} = (<HttpRequest<any>>req).body;
    for (const menu of menus) {
      console.log(menu);
      if (menu.parent) {
        const parentMenu = collection.find(item => item.language === menu.langauge && item.path === menu.parent);
        this.saveOrUpdate(parentMenu.children, menu, forceUpdate);
      } else {
        this.saveOrUpdate(collection, menu, forceUpdate);
      }
    }
    return this.createResponse(requestInfo);
  }

  private saveOrUpdate(menus: any[], menu: any, forceUpdate: boolean) {
    const index = menus.findIndex(item => item.language === menu.langauge && item.path === menu.path);
    if (index === -1) {
      menus.push(menu);
    } else if (forceUpdate) {
      menus[index] = menu;
    }
  }

  delete(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const params = (<HttpRequest<any>>req).params;
    const paths = params.getAll('paths');
    const language = params.get('language');
    for (const path of paths) {
      this.deleteByPathAndLanguage(collection, path, language);
    }
    return this.createResponse(requestInfo);
  }

  private deleteByPathAndLanguage(menus: any[], path: string, language: string) {
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i];
      if (item.language === language && item.path === path) {
        menus.splice(i, 1);
        return true;
      } else if (item.children) {
        const result = this.deleteByPathAndLanguage(item.children, path, language);
        if (result) {
          return result;
        }
      }
    }
    return false;
  }

}
