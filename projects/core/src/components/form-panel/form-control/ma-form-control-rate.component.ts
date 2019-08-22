import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {Rate} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlRateSettingComponent} from './ma-form-control-rate-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-rate [formControlName]="item.field" [nzAllowHalf]="item.half" [nzCount]="item.count"></nz-rate>
    </div>
  `,
})
export class MaFormControlRateComponent extends MaFormControlBaseComponent<Rate> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlRateSettingComponent);
  }

}
