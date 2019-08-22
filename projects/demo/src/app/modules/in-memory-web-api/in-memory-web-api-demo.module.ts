import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


// import {MaCoreModule} from '@metadata-driven-admin/core';
// import {InMemoryWebApiModule} from '@metadata-driven-admin/in-memory-web-api';
import {NZ_ICONS} from 'ng-zorro-antd';
import {icons} from '../../service/icons';

@NgModule({
  imports: [
    // MaCoreModule.forRoot({appId: 'in-memory-web-api-demo-demo'}),
    RouterModule.forRoot([]),
    // InMemoryWebApiModule,
  ],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ],
})
export class InMemoryWebApiDemoModule {
}
