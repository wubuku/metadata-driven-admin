import {Menu, MenuCustomizer} from '../ma-core-proxy';


import {LOGGED_IN_USER_HOLDER, LoggedInUserHolder} from './user.service';
import {Inject} from '@angular/core';


const AUTHORIZATION_MENU = {
  language: 'zh',
  path: '#authorization',
  index: 0,
  displayName: '权限管理',
  description: '',
  icon: {
    type: 'safety',
    theme: 'outline'
  },
  children: [
    {
      language: 'zh',
      path: '/authorization/users',
      displayName: '用户管理',
      description: '',
      index: 0,
      icon: {
        type: 'user',
        theme: 'outline'
      }
    },
    {
      language: 'zh',
      path: '/authorization/groups',
      displayName: '权限组管理',
      description: '',
      index: 1,
      icon: {
        type: 'usergroup-add',
        theme: 'outline'
      }
    },
  ]
};

export class AuthorityMenuCustomizer implements MenuCustomizer {


  constructor(@Inject(LOGGED_IN_USER_HOLDER) private loggedInUserHolder: LoggedInUserHolder) {
  }


  customize(menus: Menu[], language: string): Menu[] {
    menus.push(AUTHORIZATION_MENU);
    return menus;
  }
}
