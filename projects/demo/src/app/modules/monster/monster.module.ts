import {NgModule} from '@angular/core';
import {AppComponent} from '../../components/app.component';
import {NgZorroAntdModule, NZ_ICONS} from 'ng-zorro-antd';

import {RouterModule} from '@angular/router';
import {icons} from '../../service/icons';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MonsterViewGeneratorCustomizer} from './monster-view-generator-customizer';
import {MonsterMenuGeneratorCustomizer} from './monster-menu-generator-customizer';

import {MaCoreModule, MaWorkspaceComponent, ViewGeneratorCustomizer, MenuGeneratorCustomizer} from '../../import-proxy';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaCoreModule.forRoot({appId: 'demo-for-yang'}),
    RouterModule.forRoot([{component: MaWorkspaceComponent, path: ''}]),
  ],
  providers: [
    {provide: ViewGeneratorCustomizer, useClass: MonsterViewGeneratorCustomizer},
    {provide: MenuGeneratorCustomizer, useClass: MonsterMenuGeneratorCustomizer},
    {provide: NZ_ICONS, useValue: icons}
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaCoreModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  bootstrap: [AppComponent]
})
export class MonsterModule {

}
