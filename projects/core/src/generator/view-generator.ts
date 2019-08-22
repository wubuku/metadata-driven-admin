import {I18nService} from '../service/i18n.service';

import {Method, Raml, Resource, View,} from '../model';
import {Injectable} from '@angular/core';
import {ViewGeneratorCustomizer} from './view-generator-customizer';
import {ViewTranslateService} from './view-translate.service';
import {ViewBuilder} from './view-builder';


@Injectable({providedIn: 'root'})
export class ViewGenerator {

  constructor(private builder: ViewBuilder,
              private customizer: ViewGeneratorCustomizer,
              private viewTranslateService: ViewTranslateService,
              private i18n: I18nService) {
  }


  diff(controlGroups: View[][]): View[] {
    // TODO
    return [];
  }

  /**
   * 获取默认的视图列表，基于RAML文档转换所得
   */
  generateViews(raml: Raml): View[] {
    const array = this.extractResourceAndMethod(raml);
    const views = array
      .map(item => this.generateView(raml, item.resource, item.method))
      .filter(item => Boolean(item));

    if (this.customizer.postProcessViewsAfterGenerated) {
      return this.customizer.postProcessViewsAfterGenerated(raml, views);
    }
  }

  generateView(raml: Raml, resource: Resource, action: Method): View {
    if (this.customizer.canGenerate(raml, resource, action)) {
      const view = {} as View;
      view.name = action.description;
      view.language = this.i18n.getLocale();
      view.path = this.getViewPath(resource, action);
      view.data = this.builder.createViewData(raml, resource, action);
      if (view.data) {
        this.viewTranslateService.translate(view);

        if (this.customizer.postProcessViewAfterGenerated) {
          return this.customizer.postProcessViewAfterGenerated(raml, resource, action, view);
        }
      }
    }
  }

  private extractResourceAndMethod(raml: Raml) {
    const array: { resource: Resource, method: Method }[] = [];
    const extract = (resource: Resource) => {
      if (resource.methods) {
        for (const method of resource.methods) {
          array.push({resource, method});
        }
      }
      if (resource.resources) {
        for (const subResource of resource.resources) {
          extract(subResource);
        }
      }
    };

    for (const resource of raml.resources) {
      extract(resource);
    }
    return array;
  }

  private getViewPath(resource: Resource, action: Method) {
    if (action.method === 'get') {
      return resource.qualifiedPath;
    } else {
      return resource.qualifiedPath + '.' + action.method;
    }
  }




}



