import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {Radio} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlChoiceSettingComponent} from './ma-form-control-choice-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-radio-group [formControlName]="item.field">
        <label *ngFor="let option of item.options" nz-radio [nzValue]="option.value">{{option.label}}</label>
      </nz-radio-group>
    </div>
  `,
})
export class MaFormControlRadioComponent extends MaFormControlBaseComponent<Radio> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlChoiceSettingComponent);
  }

}
