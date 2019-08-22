import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {WebResource} from './service/web-resource';
import {IconSourceWebResource} from './service/icon-source-web-resource';
import {SettingWebResource} from './service/setting-web-resource';
import {ApiWebResource} from './service/api-web-resource';
import {MenuWebResource} from './service/menu-web-resource';
import {ViewWebResource} from './service/view-web-resource';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true, delay: 0}),
  ],
  providers: [
    {provide: WebResource, useClass: ApiWebResource,        multi: true},
    {provide: WebResource, useClass: IconSourceWebResource, multi: true},
    {provide: WebResource, useClass: MenuWebResource,       multi: true},
    {provide: WebResource, useClass: SettingWebResource,    multi: true},
    {provide: WebResource, useClass: ViewWebResource,       multi: true},
  ],
  exports: [
    HttpClientInMemoryWebApiModule
  ]
})
export class InMemoryWebApiModule { }
