import {Component, Input} from '@angular/core';
import {View} from '../../model';

@Component({
  selector: 'ma-view-editor',
  template: `
    <div nz-form >
      <nz-form-item>
        <nz-form-label [nzSpan]="6" nzRequired>视图名字(必填)</nz-form-label>
        <nz-form-control [nzSpan]="18" >
          <input nz-input [(ngModel)]="view.name" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="6" nzRequired>路由地址(必填)</nz-form-label>
        <nz-form-control [nzSpan]="18" >
          <input nz-input [(ngModel)]="view.path" />
        </nz-form-control>
      </nz-form-item>
    </div>
  `
})
export class MaViewSettingComponent {
  @Input()
  view: View;
}
