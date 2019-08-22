import {List, Method, Raml, Resource, Table, View} from '../model';
import {Injectable} from '@angular/core';
import {MaOptions} from '../service/ma-options';


/**
 * 视图生成器定制
 */
@Injectable({providedIn: 'root'})
export class ViewGeneratorCustomizer {

  constructor(private options: MaOptions) {

  }

  /**
   * 资源可否被转换为视图
   * @param  raml
   * @param  resource
   * @param  action
   * @returns
   */
  canGenerate(raml: Raml, resource: Resource, action: Method) {
    // 该资源是获取raml文档的接口，跳过！
    return raml.baseUri + resource.qualifiedPath !== this.options.api;
  }

  /**
   * 删除.patch视图
   * @param raml
   * @param  views
   * @returns
   */
  postProcessViewsAfterGenerated(raml: Raml, views: View[]): View[] {
    const processed = [];
    for (const view of views) {
      if (!view.path.endsWith('.patch')) {
        processed.push(view);
      }
    }
    return processed;
  }

  /**
   * 从table和list的operationButtons中删除.patch的button
   * @param raml
   * @param  resource
   * @param  action
   * @param  view
   * @returns
   */
  postProcessViewAfterGenerated(raml: Raml, resource: Resource, action: Method, view: View) {
    if (view.data instanceof Table || view.data instanceof List) {
      view.data.rowButtons = view.data.rowButtons.filter(btn => !btn.path.endsWith('.patch'));
    }
    return view;
  }
}
