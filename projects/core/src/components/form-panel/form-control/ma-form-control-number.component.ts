import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {InputNumber} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlNumberSettingComponent} from './ma-form-control-number-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-input-number [formControlName]="item.field" [nzStep]="item.stride" [nzMax]="item.max" [nzMin]="item.min"></nz-input-number>
    </div>
  `,
})
export class MaFormControlNumberComponent extends MaFormControlBaseComponent<InputNumber> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlNumberSettingComponent);
  }

}
