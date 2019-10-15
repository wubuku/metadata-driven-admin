import {Injectable} from '@angular/core';
import {I18nService} from './i18n.service';

interface MessageSource {
  operation: string;
  header: {
    'search-placeholder': string
  };
  dataloader: {
    'placeholder': string
  };
  button: {
    select: string;
  };
}


const zh_CN: MessageSource = {
  operation: '操作',
  header: {
    'search-placeholder': '搜索: 菜单'
  },
  dataloader: {
    placeholder: '请选择数据'
  },
  button: {
    select: '选择'
  },
};


const en_US: MessageSource = {
  operation: 'Operation',
  header: {
    'search-placeholder': 'Search for menu'
  },
  dataloader: {
    placeholder: 'Please select data'
  },
  button: {
    select: 'Select'
  },
};


@Injectable({providedIn: 'root'})
export class TranslateService {
  locale: MessageSource;

  constructor(private i18n: I18nService) {
    i18n.subscribe(this.onLanguageChange);
  }

  translate(path: string, data?: any): any {
    const content = this.getLocaleValue(path);
    if (typeof content === 'string') {
      if (data) {
        let result = content as string;
        for (const key of Object.keys(data)) {
          const value: string = data[key] as string;
          const regexp = new RegExp(`%${key}%`, 'g');
          result = result.replace(regexp, value);
        }
        return result;
      }
      return content;
    }
    return path;
  }

  onLanguageChange = (locale: string): void => {
    if (locale === 'zh') {
      this.locale = zh_CN;
    } else if (locale === 'en') {
      this.locale = en_US;
    }
  }

  private getLocaleValue(path: string): string | object {
    let res = this.locale;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }

}
