import {NgModule} from '@angular/core';
import {AppComponent} from '../../components/app.component';
import {NgZorroAntdModule, NZ_ICONS} from 'ng-zorro-antd';
import {MaCoreModule, MaWorkspaceComponent} from '../../import-proxy';

import {RouterModule} from '@angular/router';
import {icons} from '../../service/icons';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaCoreModule.forRoot({appId: 'demo-simple'}),
    RouterModule.forRoot([{component: MaWorkspaceComponent, path: ''}]),
  ],
  providers: [
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
export class SimpleModule {

}
