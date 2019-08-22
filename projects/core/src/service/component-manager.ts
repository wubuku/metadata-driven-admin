import {Injectable, Type} from '@angular/core';
import {Component} from '../model';
import {ComponentDefinition} from '../bootstrap/component-registrar';
import {ComponentPreprocessor} from './component-preprocessor';


@Injectable({providedIn: 'root'})
export class ComponentManager {

  private componentDefs: ComponentDefinition[] = [];

  constructor(private preprocessor: ComponentPreprocessor) {
  }

  getComponent(type: string): Type<any> {
    for (const definition of this.componentDefs) {
      if (definition.type === type) {
        return definition.componentType;
      }
    }
    throw new Error(`找不到类型：${type}的组件`);
  }

  getComponentDefinitions = (group: string): ComponentDefinition[] => {
    return this.componentDefs.filter(item => item.group === group);
  }

  registerComponentDefinition(definition: ComponentDefinition, force?: boolean) {
    const foundDef = this.componentDefs.find(item => item.type === definition.type);
    if (foundDef) {
      if (force) {
        Object.assign(foundDef, definition);
        Component.registerFactory(definition.type, definition.metamodelType);
      } else {
        console.warn('已经存在该组件，无法注册成功，你可以通过registerComponentDefinition(definition, true)强制注册');
      }
    } else {
      this.componentDefs.push(definition);
      Component.registerFactory(definition.type, definition.metamodelType);
    }
  }

  duplicate(component: any) {
    return this.preprocessor.preprocess(Component.create(component));
  }

}
