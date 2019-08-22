import {Injectable} from '@angular/core';

import {MenuGeneratorCustomizer, Raml, Menu, I18nService} from '../../import-proxy';


@Injectable()
export class MonsterMenuGeneratorCustomizer extends MenuGeneratorCustomizer {

  constructor(private i18n: I18nService) {
    super();
  }

  processMenus(raml: Raml, menus: Menu[]): Menu[] {
    const language = this.i18n.getLocale();
    const uncategorizedMenus = [];
    const resources = raml.resources;
    for (const resource of resources) {
      if (resource.methods) {
        for (const method of resource.methods) {
          if (method.method === 'get') {
            uncategorizedMenus.push({
              language: language,
              parent: '#uncategorized',
              path: resource.qualifiedPath,
              index: uncategorizedMenus.length,
              displayName: resource.qualifiedPath,
              description: method.description,
            });
            break;
          }
        }
      }
    }
    return [{
      language: language,
      path: '#uncategorized',
      index: 0,
      displayName: language === 'zh' ? '未分类菜单' : 'Uncategorized',
      description: language === 'zh' ? '未分类菜单（自动生成）' : 'Uncategorized (Automatic generated)',
      icon: {
        type: 'folder',
        theme: 'outline'
      },
      children: uncategorizedMenus
    }];
  }
}
