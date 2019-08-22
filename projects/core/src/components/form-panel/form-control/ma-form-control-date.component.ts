import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {DatePicker} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlDateSettingComponent} from './ma-form-control-date-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-date-picker [formControlName]="item.field" [nzShowTime]="item.showTime" [nzFormat]="item.format" [nzDisabledDate]="item.disabledDate"></nz-date-picker>
    </div>
  `,
})
export class MaFormControlDateComponent extends MaFormControlBaseComponent<DatePicker> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlDateSettingComponent);
  }

}
