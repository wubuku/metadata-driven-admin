import {Component, Input} from '@angular/core';
import {Rate} from '../../../model';

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
            <nz-form-label nzSpan="8">星星数量</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-slider [(ngModel)]="value.count" [nzMin]="3" [nzMax]="10" [nzStep]="1"></nz-slider>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">是否支持半选</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-switch [(ngModel)]="value.half"></nz-switch>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">默认值</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-rate [(ngModel)]="value.value" [nzAllowHalf]="value.half" [nzCount]="value.count"></nz-rate>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `
})
export class MaFormControlRateSettingComponent {
  @Input()
  value: Rate;

}
