import {Inject, Injectable, Optional} from '@angular/core';
import {I18nService} from './i18n.service';
import {BatchUpdate, Menu} from '../model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {likeIgnoreCase} from '../util';
import {MA_MENU_ACCESS_DECISION_MANAGER, MA_MENU_CUSTOMIZER, MenuAccessDecisionManager, MenuCustomizer} from './menu-customizer';


@Injectable({providedIn: 'root'})
export class MenuService {

  private url = '/api/menus';
  private menusGroup: { [x: string]: Observable<Menu[]> } = {};
  private readonly compositeMap: any;

  constructor(private http: HttpClient, private i18n: I18nService,
              @Inject(MA_MENU_CUSTOMIZER) private customizers: MenuCustomizer[],
              @Optional() @Inject(MA_MENU_ACCESS_DECISION_MANAGER) private accessDecisionManager: MenuAccessDecisionManager) {
    this.compositeMap = map<Menu[], Menu[]>(menus => {
      const language = this.i18n.getLocale();
      for (const customizer of this.customizers) {
        menus = customizer.customize(menus, language);
      }
      return menus;
    });
  }

  /**
   * 获取所有的菜单数据
   * @param reload 是否强制重新加载
   */
  getAll(reload: boolean = false): Observable<Menu[]> {
    const language = this.i18n.getLocale();
    if (!this.menusGroup[language] || reload) {
      this.menusGroup[language] =
        this.http
          .get<Menu[]>(this.url)
          .pipe(this.compositeMap, shareReplay(1));
    }
    return this.menusGroup[language];
  }

  getPermitMenus(): Observable<Menu[]> {
    const all = this.getAll();
    if (this.accessDecisionManager) {
      return all.pipe(map(menus => this.accessDecisionManager.decide(menus)));
    }
    return all;
  }

  /**
   * 保存或者更新菜单
   * @param menu 菜单
   */
  async saveOrUpdate(menu: Menu) {
    if (menu.path) {
      return await this.doSave({menus: [menu], forceUpdate: true});
    } else {
      return Promise.reject('菜单的路径不能为空');
    }
  }

  /**
   * 批量更新货保存菜单
   * @param menus 菜单数组
   * @param forceUpdate 是否强制更新
   */
  async batchSave(menus: Menu[], forceUpdate: boolean = false) {
    return await this.doSave({menus, forceUpdate});
  }


  private async doSave(body: BatchUpdate) {
    return await this.http.post(this.url, body).toPromise();
  }

  /**
   * 根据`path`删除菜单
   * @param path 菜单对应的路径
   */
  async remove(path: string) {
    const options = {
      params: {
        paths: [path],
        language: this.i18n.getLocale()
      }
    };
    return await this.http.delete(this.url, options).toPromise();
  }

  /**
   * 根据关键字搜索菜单
   * @param keyword 关键字
   */
  search(keyword: string): Observable<Menu[]> {
    return this.getPermitMenus().pipe(
      map((menus) => {
        if (!keyword) {
          return [...menus];
        }

        const menusForSearch = [];
        for (const g of menus) {
          const group = {displayName: g.displayName, path: g.path, children: []};
          if (g.children) {
            for (const child of g.children) {
              const {displayName, path} = child;

              if (displayName && path) {
                if (likeIgnoreCase(displayName, keyword) || likeIgnoreCase(path, keyword)) {
                  group.children.push({displayName, path});
                }
              }
            }
            if (group.children.length > 0) {
              menusForSearch.push(group);
            }
          }
        }
        return menusForSearch;
      })
    );
  }


}
