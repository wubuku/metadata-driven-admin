import {Injectable} from '@angular/core';
import {Menu, Raml} from '../model';
import {I18nService} from '../service/i18n.service';
import {capitalize, English, parseCamelCase} from '../util';
import {MenuGeneratorCustomizer} from './menu-generator-customizer';

@Injectable({providedIn: 'root'})
export class MenuGenerator {
  constructor(private i18n: I18nService, private customizer: MenuGeneratorCustomizer) {
  }


  generateMenus(raml: Raml) {

    const classes = Object.keys(raml.types);
    const resources = raml.resources;
    const modules = new Map<string, Menu[]>();
    const language = this.i18n.getLocale();

    for (const type of classes) {
      if (!type.startsWith('org.springframework')) {
        const names = type.split('.');
        if (names.length > 2) {
          const module = names[names.length - 2];
          if (module.charCodeAt(0) > 96) {
            const className = names[names.length - 1];
            const relativeUri = '/' + English.plural(className);
            let children = modules.get(module);
            if (!children) {
              children = [];
              modules.set(module, children);
            }
            const resource = resources.find(r => r.relativeUri === relativeUri);
            if (resource) {
              children.push({
                language: language,
                index: children.length,
                description: resource.description,
                displayName: language === 'zh' ? resource.displayName : capitalize(parseCamelCase(className)),
                path: relativeUri,
                parent: `#${module}`
              });
            }
          }
        }
      }
    }
    let index = 0;
    const menus: Menu[] = [];

    modules.forEach((children, module) => {
      menus.push({
        language: language,
        index: index++,
        description: module,
        displayName: module,
        path: `#${module}`,
        children: children
      });
    });
    return this.customizer.processMenus(raml, menus);
  }

}
