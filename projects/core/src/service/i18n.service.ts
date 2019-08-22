import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import {en_US, NzI18nService, zh_CN} from 'ng-zorro-antd';
import {LocalStorageService} from '../wrapper/local-storage.service';

@Injectable({providedIn: 'root'})
export class I18nService {
  private locale: string;
  private localeKey = 'locale';
  private localeSubject = new Subject();

  constructor(private nzI18n: NzI18nService, private localStorage: LocalStorageService) {

  }


  setLocale(locale: string) {
    if (this.locale !== locale) {
      this.locale = locale;
      this.switchLocale();
    }
  }

  switchLocale() {
    if (this.locale === 'zh') {
      registerLocaleData(zh);
      this.nzI18n.setLocale(zh_CN);
    } else if (this.locale === 'en') {
      registerLocaleData(en);
      this.nzI18n.setLocale(en_US);
    }
    this.localeSubject.next(this.locale);
    this.localStorage.set(this.localeKey, this.locale);
  }

  getLocale() {
    if (!this.locale) {
      this.initLocale();
    }
    return this.locale;
  }

  initLocale() {
    const locale = this.localStorage.get(this.localeKey);
    if (locale) {
      this.setLocale(locale);
    } else {
      this.setLocale(navigator.language.substring(0, 2));
    }
  }

  getLocales() {
    return {zh: '中文', en: 'English'};
  }

  subscribe(next?: (value: string) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    next(this.getLocale());
    return this.localeSubject.subscribe(next, error, complete);
  }
}
