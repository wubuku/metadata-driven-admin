import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {Select} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlChoiceSettingComponent} from './ma-form-control-choice-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-select [nzPlaceHolder]="item.description" [formControlName]="item.field">
        <nz-option *ngFor="let option of item.options" [nzValue]="option.value" [nzLabel]="option.label"></nz-option>
      </nz-select>
    </div>
  `,
})
export class MaFormControlSelectComponent extends MaFormControlBaseComponent<Select> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlChoiceSettingComponent);
  }

}
