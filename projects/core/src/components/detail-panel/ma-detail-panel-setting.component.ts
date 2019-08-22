import {Component, Input} from '@angular/core';
import {DetailPanel} from '../../model';

@Component({
  selector: 'ma-detail-panel-setting',
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">水平间隔距离</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-slider [nzMin]="0" [nzMax]="24" [(ngModel)]="value.formPanel.body.horizontal"></nz-slider>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">垂直间隔距离</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-slider [nzMin]="0" [nzMax]="48" [nzStep]="3" [(ngModel)]="value.formPanel.body.vertical"></nz-slider>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `,
})
export class MaDetailPanelSettingComponent {

  @Input()
  value: DetailPanel;

}
