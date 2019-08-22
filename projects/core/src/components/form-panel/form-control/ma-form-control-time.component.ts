import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {TimePicker} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlTimeSettingComponent} from './ma-form-control-time-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-time-picker [formControlName]="item.field" [nzFormat]="item.format"></nz-time-picker>
    </div>
  `,
})
export class MaFormControlTimeComponent extends MaFormControlBaseComponent<TimePicker> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlTimeSettingComponent);
  }

}
