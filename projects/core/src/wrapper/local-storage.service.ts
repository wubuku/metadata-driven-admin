import {Injectable} from '@angular/core';
import {MaOptions} from '../service/ma-options';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  prefix = 'ma';


  constructor(option: MaOptions) {
    this.prefix = option.appId;
  }

  set(key: string, value: string) {
    localStorage.setItem(this.prefix + '-' + key, value);
  }

  get(key: string) {
    return localStorage.getItem(this.prefix + '-' + key);
  }

  remove(key: string) {
    return localStorage.removeItem(this.prefix + '-' + key);
  }
}
