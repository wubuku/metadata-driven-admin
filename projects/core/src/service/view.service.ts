import {Injectable} from '@angular/core';
import {I18nService} from './i18n.service';
import {NzMessageService} from 'ng-zorro-antd';
import {BatchUpdate, View} from '../model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isCompatible} from '../util';
import {shareReplay} from 'rxjs/operators';
import {ComponentManager} from './component-manager';

@Injectable({providedIn: 'root'})
export class ViewService {
  private url = '/api/views';
  private viewsGroup: { [x: string]: Observable<View[]> } = {};

  constructor(private componentManager: ComponentManager, // init components definitions
              private http: HttpClient, private i18n: I18nService, private messageService: NzMessageService) {

  }

  /**
   * 获取指定语言的所有视图数据
   * @param language 给定的语言参数，缺省为当前语言
   */
  getAll(language: string = this.i18n.getLocale()): Observable<View[]> {
    if (!this.viewsGroup[language]) {
      this.viewsGroup[language] = this.http.get<View[]>(this.url, {headers: {'Accept-Language': language}}).pipe(shareReplay(1));
    }
    return this.viewsGroup[language];
  }

  /**
   * 根据`path`获取对应的视图
   * inputPath 将匹配view的path属性
   */
  async getByPath(inputPath: string): Promise<View> {
    const view = await this.findViewByPath(inputPath);
    if (view) {
      const {language, path, name, data} = view;
      return {language, path, name, data: this.componentManager.duplicate(data)};
    }
    this.messageService.error('无法找到对应的视图->' + inputPath);
    throw new Error('无法找到对应的视图->' + inputPath);
  }

  /**
   * 根据`path`判断对应视图是否存在
   * @param inputPath 将匹配view的path属性
   */
  async exists(inputPath: string): Promise<boolean> {
    const view = await this.findViewByPath(inputPath);
    if (view) {
      return !!view;
    }
  }

  /**
   * 保存（更新）视图数据
   * @param view 视图数据
   */
  async saveOrUpdate(view: View) {
    return this.doSave({views: [view], forceUpdate: true});
  }

  /**
   * 批量保存
   * @param views 视图数组
   * @param forceUpdate 如果对应视图在数据库中存在，是否强制更新
   */
  async batchSave(views: View[], forceUpdate = false) {
    return this.doSave({views, forceUpdate});
  }

  /**
   * 删除`path`对应的视图
   * @param inputPath 将匹配view的path属性
   */
  async remove(inputPath: string): Promise<View> {
    await this.http.delete(this.url, {params: {paths: [inputPath], language: this.i18n.getLocale()}}).toPromise();
    const views = await this.getAll().toPromise();
    // 查找本地views中对应的view的索引
    const index = views.findIndex(v => v.path === inputPath);
    return views.splice(index, 1)[0];
  }


  private async findViewByPath(inputPath: string): Promise<View> {
    const views = await this.getAll().toPromise();
    try {
      const lastPointPosition = inputPath.lastIndexOf('.');
      let inputSuffix = lastPointPosition > 0 ? inputPath.substring(lastPointPosition) : null;
      const suffix = ['.put', '.post', '.delete', '.patch'];
      if (suffix.findIndex(item => item === inputSuffix) === -1) {
        inputSuffix = null;
      }
      const matchedViews = views.filter(view => isCompatible(view.path, inputPath, inputSuffix));
      if (matchedViews && matchedViews.length > 0) {
        for (const matchedView of matchedViews) {
          if (matchedView.path === inputPath) {
            return matchedView;
          }
        }
        return matchedViews[0];
      }
    } catch (e) {
      this.messageService.error(e.message);
      throw e;
    }
  }

  private async doSave(body: BatchUpdate) {
    await this.http.post(this.url, body).toPromise();
    const views = await this.getAll().toPromise();
    const inserted = [];
    for (const view of body.views) {
      // 查找本地views中对应的view的索引
      const updatedIndex = views.findIndex(v => v.path === view.path);
      if (updatedIndex !== -1) {
        views[updatedIndex] = view;
      } else {
        inserted.push(view);
      }
    }
    views.push(...inserted);
  }

}
