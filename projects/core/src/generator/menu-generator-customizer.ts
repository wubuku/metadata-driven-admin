import {Injectable} from '@angular/core';
import {Menu, Raml} from '../model';


@Injectable({providedIn: 'root'})
export class MenuGeneratorCustomizer {
  processMenus(raml: Raml, menus: Menu[]) {
    return menus;
  }
}
