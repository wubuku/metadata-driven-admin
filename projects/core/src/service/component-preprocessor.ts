import {Injectable} from '@angular/core';
import {Component} from '../model';

@Injectable({providedIn: 'root'})
export class ComponentPreprocessor {
  preprocess(component: Component): Component {
    return component;
  }
}
