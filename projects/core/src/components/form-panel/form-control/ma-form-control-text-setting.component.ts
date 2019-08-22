import {Component, Input} from '@angular/core';
import {Text} from '../../../model';

@Component({
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">是否必填</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-switch [(ngModel)]="value.required"></nz-switch>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">最大长度</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-input-number [(ngModel)]="value.maxLength"></nz-input-number>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">最小长度</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-input-number [(ngModel)]="value.minLength"></nz-input-number>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">正则表达式</nz-form-label>
            <nz-form-control nzSpan="16">
              <input nz-input [(ngModel)]="value.pattern" />
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">默认值</nz-form-label>
            <nz-form-control nzSpan="16">
              <input nz-input [(ngModel)]="value.value" />
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `
})
export class MaFormControlTextSettingComponent {
  @Input()
  value: Text;

}
