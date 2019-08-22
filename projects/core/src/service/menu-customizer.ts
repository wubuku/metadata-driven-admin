import {Menu} from '../model';
import {Injectable, InjectionToken} from '@angular/core';

export const MA_MENU_ACCESS_DECISION_MANAGER = new InjectionToken('MA_MENU_ACCESS_DECISION_MANAGER');

export interface MenuAccessDecisionManager {
  decide(menus: Menu[]): Menu[];
}


export interface MenuCustomizer {
  customize(menus: Menu[], language: string): Menu[];
}


export const MA_MENU_CUSTOMIZER = new InjectionToken<string>('MA_MENU_CUSTOMIZER');


@Injectable()
export class ExtensionMenuCustomizer implements MenuCustomizer {

  customize(menus: Menu[], language: string): Menu[] {
    const extension: Menu = {
      language: language,
      path: '#extension',
      index: 0,
      displayName: language === 'en' ? 'Extended management' : '扩展管理',
      description: '',
      icon: {
        type: 'usb',
        theme: 'outline'
      },
      children: [
        {
          language: language,
          path: '/management/setting',
          displayName: language === 'en' ? 'Skin' : '主题定制',
          description: '',
          index: 0,
          icon: {
            type: 'skin',
            theme: 'outline'
          }
        },
        {
          language: language,
          path: '/management/icons',
          displayName: language === 'en' ? 'Icon' : '图标定制',
          description: '',
          index: 1,
          icon: {
            type: 'picture',
            theme: 'outline'
          }
        },
        {
          language: language,
          path: '/management/menus',
          displayName: language === 'en' ? 'Menu' : '菜单定制',
          description: '',
          index: 2,
          icon: {
            type: 'menu-unfold',
            theme: 'outline'
          }
        },
        {
          language: language,
          path: '/management/views',
          displayName: language === 'en' ? 'View' : '视图定制',
          description: '',
          index: 3,
          icon: {
            type: 'file',
            theme: 'outline'
          }
        },
        {
          language: language,
          path: '/management/interfaces',
          displayName: language === 'en' ? 'Interface' : '完整接口列表',
          description: '',
          index: 4,
          icon: {
            type: 'api',
            theme: 'outline'
          }
        },
      ]
    };
    extension.description = extension.displayName;
    if (extension.children) {
      extension.children.forEach(menu => menu.description = menu.displayName);
    }
    menus.push(extension);
    return menus;
  }

}
