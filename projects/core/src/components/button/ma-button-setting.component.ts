import {Component, Input} from '@angular/core';
import {Button} from '../../model';

@Component({
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="6">按钮文本</nz-form-label>
            <nz-form-control nzSpan="18">
              <input nz-input [(ngModel)]="value.label"/>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="6">按钮描述</nz-form-label>
            <nz-form-control nzSpan="18">
              <textarea nz-input [(ngModel)]="value.description" nzAutosize="false"></textarea>
            </nz-form-control>
          </nz-form-item>
        </div>

        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="6">按钮样式</nz-form-label>
            <nz-form-control nzSpan="18">
              <nz-radio-group [(ngModel)]="value.classType">
                <label nz-radio nzValue="primary">主按钮</label>
                <label nz-radio nzValue="default">次按钮</label>
                <label nz-radio nzValue="dashed">虚线按钮</label>
                <label nz-radio nzValue="danger">危险按钮</label>
              </nz-radio-group>
            </nz-form-control>
          </nz-form-item>
        </div>

        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="6">触发动作</nz-form-label>
            <nz-form-control nzSpan="18">
              <nz-radio-group [(ngModel)]="value.triggerType">
                <label nz-radio nzValue="cancel">取消(cancel)</label>
                <label nz-radio nzValue="submit">提交(submit)</label>
                <label nz-radio nzValue="link">跳&nbsp;&nbsp;转</label>
                <label nz-radio nzValue="modal">模态框</label>
              </nz-radio-group>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12" *ngIf="value.triggerType === 'link' || value.triggerType === 'modal'">
          <nz-form-item>
            <nz-form-label nzSpan="6">接口/视图</nz-form-label>
            <nz-form-control nzSpan="18">
              <ma-data-picker viewPath="/management/views" objectPath="path" placeholder="请选择视图" [(ngModel)]="value.path"></ma-data-picker>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      [nz-radio] {
        display: block;
        height: 30px;
        line-height: 30px;
      }
    `
  ]
})
export class MaButtonSettingComponent {
  @Input()
  value: Button;
}
