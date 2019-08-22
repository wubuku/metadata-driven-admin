import {Menu, MenuAccessDecisionManager} from '../ma-core-proxy';

import {GrantedAuthority} from './authority.service';
import {LOGGED_IN_USER_HOLDER, LoggedInUserHolder} from './user.service';
import {Inject} from '@angular/core';


export class DefaultMenuAccessDecisionManager implements MenuAccessDecisionManager {


  constructor(@Inject(LOGGED_IN_USER_HOLDER) private loggedInUserHolder: LoggedInUserHolder) {
  }


  decide(menus: Menu[]): Menu[] {

    const authorities = this.filterMap(this.loggedInUserHolder.getLoggedInUser().authorities);

    return this.filterMenus(menus, authorities);
  }

  filterMap(authorities: GrantedAuthority[]) {
    const paths: string[] = [];
    const prefix = 'VIEW_';
    authorities.filter(authority => {
      if (authority.authority.startsWith(prefix)) {
        paths.push(authority.authority.substring(prefix.length));
      }
    });
    return paths;
  }

  filterMenus(menus: Menu[], authorities: string[]): Menu[] {
    const filteredMenus = [];
    for (const menu of menus) {
      const item: Menu = {...menu};
      if (item.children) {
        item.children = this.filterMenus(item.children, authorities);
        if (item.children.length > 0) {
          filteredMenus.push(item);
        }
      } else if (authorities.includes(item.path)) {
        filteredMenus.push(item);
      }
    }
    return filteredMenus;
  }
}
