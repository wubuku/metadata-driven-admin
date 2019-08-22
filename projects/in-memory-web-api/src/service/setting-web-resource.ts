import {WebResource} from './web-resource';
import {RequestInfo} from 'angular-in-memory-web-api';
import {HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

const setting = {
  'id': 'wms',
  'logo': 'http://takumi.oss-cn-qingdao.aliyuncs.com/wms/prod/1542193505981.svg',
  'appName': '通用管理系统',
  'appVersion': 0,
  'theme': {
    'primary-color': '#ff9f3b',
    'body-background': '#ffdab0',
    'heading-color': '#a4c342',
    'text-color': '#43affe',
    'font-size-base': 28,
    'line-height-base': '1.8',
    'border-style-base': 'solid',
    'border-width-base': 1,
    'border-color-base': '#c0c0c0',
    'input-placeholder-color': '#808080',
    'input-bg': '#ffffff',
    'layout-header-background': '#ff8040',
    'layout-header-height': 8,
    'layout-header-padding': 6,
    'layout-sider-background': '#8080ff',
    'layout-body-background': '#eaeaea',
    'layout-footer-background': '#804040',
    'layout-footer-padding': 6,
    'menu-item-height': 5,
    'menu-item-color': '#008000',
    'menu-item-active-bg': '#004080',
    'menu-item-active-border-width': 6,
    'menu-highlight-color': '#804000',
    'menu-item-group-title-color': '#400040',
    'menu-collapsed-width': 32
  },
  'extra': {'company': '上海通路快建网络服务外包有限公司', 'website': 'http://www.tonglukuaijian.com/'}
};

@Injectable()
export class SettingWebResource extends WebResource {
  constructor() {
    super('setting', setting);
  }

  post(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const body = (<HttpRequest<any>>req).body;
    return super.createResponse(requestInfo, Object.assign(collection, body));
  }


}
